package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.InternalDAO;
import com.debao.defiles.dao.InternalLogDAO;
import com.debao.defiles.services.file.InternalService;
import com.debao.defiles.vo.InternalLogVO;
import com.debao.defiles.vo.InternalVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.InternalQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class InternalServiceImpl extends CommonFileService implements InternalService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private InternalDAO internalDAO;
	
	@Autowired
	private InternalLogDAO internalLogDAO;

	@Override
	public InternalVO findByID(Integer internalid) {
		return internalDAO.findByID(internalid);
	}

	@Override
	public boolean insert(final InternalVO internalVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert internal first
				if (!internalDAO.insert(internalVO)) {
					return false;
				}

				internalVO.setFileid(internalDAO.insertedID());
				
				// insert internal log then
				
				InternalLogVO internalLogVO = new InternalLogVO();
				internalLogVO.setFileid(internalVO.getFileid());
				internalLogVO.setFileoptid(FileOperations.ADD.ordinal());
				internalLogVO.setChangedesc(prepareChangeDesc(internalVO, userVO, FileOperations.ADD));
				internalLogVO.setUserid(userVO.getUserid());
				internalLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!internalLogDAO.insert(internalLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final InternalVO internalVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original internal first
				InternalVO orgInternalVO = internalDAO.findByID(internalVO.getFileid());

				// 2. update internal then
				if (!internalDAO.update(internalVO)) {
					return false;
				}
				
				// 3. insert internal log then
				
				InternalLogVO internalLogVO = new InternalLogVO();
				internalLogVO.setFileid(internalVO.getFileid());
				internalLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				internalLogVO.setChangedesc(prepareChangeDesc(internalVO, orgInternalVO, userVO, FileOperations.EDIT));
				internalLogVO.setUserid(userVO.getUserid());
				internalLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!internalLogDAO.insert(internalLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer internalid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				InternalVO internalVO = internalDAO.findByID(internalid);
				
				// 1. mark internal as delete
				if (!internalDAO.delete(internalid)) {
					return false;
				}
				
				InternalLogVO internalLogVO = new InternalLogVO();
				internalLogVO.setFileid(internalVO.getFileid());
				internalLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				internalLogVO.setChangedesc(prepareChangeDesc(internalVO, userVO, FileOperations.DELETE));
				internalLogVO.setUserid(userVO.getUserid());
				internalLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!internalLogDAO.insert(internalLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<InternalVO> fuzzyFind(InternalQueryVO filter) {
		return internalDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(InternalQueryVO filter) {
		return internalDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<InternalVO> find(InternalQueryVO filter) {
		return internalDAO.find(filter);
	}

	@Override
	public int totalFind(InternalQueryVO filter) {
		return internalDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param internalVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(InternalVO internalVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(internalVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newInternalVO
	 * @param orgInternalVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(InternalVO newInternalVO, InternalVO orgInternalVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer internalID = newInternalVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, internalID, descAdd(newInternalVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgInternalVO, newInternalVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, internalID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, internalID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, internalID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param internalVO
	 * @return
	 */
	private String descAdd(InternalVO internalVO) {
		
		StringBuilder desc = new StringBuilder();

		String internalName = internalVO.getFilename();
		internalName = internalName == null || internalName.isEmpty() ? "" : internalName;
		descSingleAdd(desc, "文件名称", internalName);
		
		String internalNumber = internalVO.getFilenumber();
		internalNumber = internalNumber == null || internalNumber.isEmpty() ? "" : internalNumber;
		descSingleAdd(desc, "文件编号", internalNumber);

    String closed = internalVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String internalLabel = internalVO.getFilelabel();
		internalLabel = internalLabel == null || internalLabel.isEmpty() ? "" : internalLabel;
		descSingleAdd(desc, "文件标签", internalLabel);
		
		String internalDesc = internalVO.getFiledesc();
		internalDesc = internalDesc == null || internalDesc.isEmpty() ? "" : internalDesc;
		descSingleAdd(desc, "文件描述", internalDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origInternalVO
	 * @param newInternalVO
	 * @return
	 */
	private String descEdit(InternalVO origInternalVO, InternalVO newInternalVO) {

		// only compare internals with the same ID
		if (origInternalVO.getFileid() != newInternalVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// internal name change
		if (!origInternalVO.getFilename().trim().equalsIgnoreCase(newInternalVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origInternalVO.getFilename(), newInternalVO.getFilename());
		}
		
		// internal number change
		if (!origInternalVO.getFilenumber().trim().equalsIgnoreCase(newInternalVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origInternalVO.getFilenumber(), newInternalVO.getFilenumber());
		}

    if (origInternalVO.getClosed() != newInternalVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origInternalVO.getClosed(), newInternalVO.getClosed());
    }
		
		// internal label change
		String orgInternalLabel = origInternalVO.getFilelabel() == null ? "" : origInternalVO.getFilelabel().trim();
		String newInternalLabel = newInternalVO.getFilelabel() == null ? "" : newInternalVO.getFilelabel().trim();
		
		if (!orgInternalLabel.trim().equalsIgnoreCase(newInternalLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgInternalLabel, newInternalLabel);
		}
		
		// internal description change
		String orgInternalDesc = origInternalVO.getFiledesc() == null ? "" : origInternalVO.getFiledesc().trim();
		String newInternalDesc = newInternalVO.getFiledesc() == null ? "" : newInternalVO.getFiledesc().trim();
		
		if (!orgInternalDesc.equalsIgnoreCase(newInternalDesc)) {
			descSingleEdit(desc, "文件描述", orgInternalDesc, newInternalDesc);
		}
		
		// internal upload change
		if (!origInternalVO.getLocation().equalsIgnoreCase(newInternalVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public InternalDAO getInternalDAO() {
		return internalDAO;
	}

	public void setInternalDAO(InternalDAO internalDAO) {
		this.internalDAO = internalDAO;
	}

	public InternalLogDAO getInternalLogDAO() {
		return internalLogDAO;
	}

	public void setInternalLogDAO(InternalLogDAO internalLogDAO) {
		this.internalLogDAO = internalLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
