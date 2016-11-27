package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.AuditDAO;
import com.debao.defiles.dao.AuditLogDAO;
import com.debao.defiles.services.file.AuditService;
import com.debao.defiles.vo.AuditLogVO;
import com.debao.defiles.vo.AuditVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.AuditQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class AuditServiceImpl extends CommonFileService implements AuditService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private AuditDAO auditDAO;
	
	@Autowired
	private AuditLogDAO auditLogDAO;

	@Override
	public AuditVO findByID(Integer fileid) {
		return auditDAO.findByID(fileid);
	}

	@Override
	public boolean insert(final AuditVO auditVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert file first
				if (!auditDAO.insert(auditVO)) {
					return false;
				}

				auditVO.setFileid(auditDAO.insertedID());
				
				// insert file log then
				
				AuditLogVO auditLogVO = new AuditLogVO();
				auditLogVO.setFileid(auditVO.getFileid());
				auditLogVO.setFileoptid(FileOperations.ADD.ordinal());
				auditLogVO.setChangedesc(prepareChangeDesc(auditVO, userVO, FileOperations.ADD));
				auditLogVO.setUserid(userVO.getUserid());
				auditLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!auditLogDAO.insert(auditLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final AuditVO auditVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original file first
				AuditVO orgAuditVO = auditDAO.findByID(auditVO.getFileid());
				
				// 2. update file then
				if (!auditDAO.update(auditVO)) {
					return false;
				}
				
				// 3. insert file log then
				
				AuditLogVO auditLogVO = new AuditLogVO();
				auditLogVO.setFileid(auditVO.getFileid());
				auditLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				auditLogVO.setChangedesc(prepareChangeDesc(auditVO, orgAuditVO, userVO, FileOperations.EDIT));
				auditLogVO.setUserid(userVO.getUserid());
				auditLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!auditLogDAO.insert(auditLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer fileid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				AuditVO auditVO = auditDAO.findByID(fileid);
				
				// 1. mark file as delete
				if (!auditDAO.delete(fileid)) {
					return false;
				}
				
				AuditLogVO auditLogVO = new AuditLogVO();
				auditLogVO.setFileid(auditVO.getFileid());
				auditLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				auditLogVO.setChangedesc(prepareChangeDesc(auditVO, userVO, FileOperations.DELETE));
				auditLogVO.setUserid(userVO.getUserid());
				auditLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!auditLogDAO.insert(auditLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<AuditVO> fuzzyFind(AuditQueryVO filter) {
		return auditDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(AuditQueryVO filter) {
		return auditDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<AuditVO> find(AuditQueryVO filter) {
		return auditDAO.find(filter);
	}

	@Override
	public int totalFind(AuditQueryVO filter) {
		return auditDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param auditVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(AuditVO auditVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(auditVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newAuditVO
	 * @param orgAuditVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(AuditVO newAuditVO, AuditVO orgAuditVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer fileID = newAuditVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, fileID, descAdd(newAuditVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgAuditVO, newAuditVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, fileID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, fileID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, fileID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param auditVO
	 * @return
	 */
	private String descAdd(AuditVO auditVO) {
		
		StringBuilder desc = new StringBuilder();
		
		String fileName = auditVO.getFilename();
		fileName = fileName == null || fileName.isEmpty() ? "" : fileName;
		descSingleAdd(desc, "文件名称", fileName);
		
		String fileNumber = auditVO.getFilenumber();
		fileNumber = fileNumber == null || fileNumber.isEmpty() ? "" : fileNumber;
		descSingleAdd(desc, "文件编号", fileNumber);

    String clientName = auditVO.getClientname();
    clientName = clientName == null || clientName.isEmpty() ? "" : clientName;
    descSingleAdd(desc, "客户名称", clientName);

    String closed = auditVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String fileLabel = auditVO.getFilelabel();
		fileLabel = fileLabel == null || fileLabel.isEmpty() ? "" : fileLabel;
		descSingleAdd(desc, "文件标签", fileLabel);
		
		String fileDesc = auditVO.getFiledesc();
		fileDesc = fileDesc == null || fileDesc.isEmpty() ? "" : fileDesc;
		descSingleAdd(desc, "文件描述", fileDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origAuditVO
	 * @param newAuditVO
	 * @return
	 */
	private String descEdit(AuditVO origAuditVO, AuditVO newAuditVO) {

		// only compare files with the same ID
		if (origAuditVO.getFileid() != newAuditVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// file name change
		if (!origAuditVO.getFilename().trim().equalsIgnoreCase(newAuditVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origAuditVO.getFilename(), newAuditVO.getFilename());
		}
		
		// file number change
		if (!origAuditVO.getFilenumber().trim().equalsIgnoreCase(newAuditVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origAuditVO.getFilenumber(), newAuditVO.getFilenumber());
		}

    // audit source change
    String orgClientName = origAuditVO.getClientname() == null ? "" : origAuditVO.getClientname().trim();
    String newClientName = newAuditVO.getClientname() == null ? "" : newAuditVO.getClientname().trim();

    if (!orgClientName.trim().equalsIgnoreCase(newClientName.trim())) {
      descSingleEdit(desc, "客户名称", orgClientName, newClientName);
    }

    // file number change
    if (origAuditVO.getClosed() != newAuditVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origAuditVO.getClosed(), newAuditVO.getClosed());
    }
		
		// file label change
		String orgAuditLabel = origAuditVO.getFilelabel() == null ? "" : origAuditVO.getFilelabel().trim();
		String newAuditLabel = newAuditVO.getFilelabel() == null ? "" : newAuditVO.getFilelabel().trim();
		
		if (!orgAuditLabel.trim().equalsIgnoreCase(newAuditLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgAuditLabel, newAuditLabel);
		}
		
		// file description change
		String orgAuditDesc = origAuditVO.getFiledesc() == null ? "" : origAuditVO.getFiledesc().trim();
		String newAuditDesc = newAuditVO.getFiledesc() == null ? "" : newAuditVO.getFiledesc().trim();
		
		if (!orgAuditDesc.equalsIgnoreCase(newAuditDesc)) {
			descSingleEdit(desc, "文件描述", orgAuditDesc, newAuditDesc);
		}
		
		// file upload change
		if (!origAuditVO.getLocation().equalsIgnoreCase(newAuditVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public AuditDAO getAuditDAO() {
		return auditDAO;
	}

	public void setAuditDAO(AuditDAO auditDAO) {
		this.auditDAO = auditDAO;
	}

	public AuditLogDAO getAuditLogDAO() {
		return auditLogDAO;
	}

	public void setAuditLogDAO(AuditLogDAO fileLogDAO) {
		this.auditLogDAO = fileLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
