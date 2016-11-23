package com.debao.defiles.services.file.impl;
  
import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.ExternalDAO;
import com.debao.defiles.dao.ExternalLogDAO;
import com.debao.defiles.services.file.ExternalService;
import com.debao.defiles.vo.ExternalLogVO;
import com.debao.defiles.vo.ExternalVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.ExternalQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class ExternalServiceImpl extends CommonFileService implements ExternalService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private ExternalDAO externalDAO;
	
	@Autowired
	private ExternalLogDAO externalLogDAO;

	@Override
	public ExternalVO findByID(Integer externalid) {
		return externalDAO.findByID(externalid);
	}

	@Override
	public boolean insert(final ExternalVO externalVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert external first
				if (!externalDAO.insert(externalVO)) {
					return false;
				}

				externalVO.setFileid(externalDAO.insertedID());
				
				// insert external log then
				
				ExternalLogVO externalLogVO = new ExternalLogVO();
				externalLogVO.setFileid(externalVO.getFileid());
				externalLogVO.setFileoptid(FileOperations.ADD.ordinal());
				externalLogVO.setChangedesc(prepareChangeDesc(externalVO, userVO, FileOperations.ADD));
				externalLogVO.setUserid(userVO.getUserid());
				externalLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!externalLogDAO.insert(externalLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final ExternalVO externalVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original external first
				ExternalVO orgExternalVO = externalDAO.findByID(externalVO.getFileid());

				// 2. update external then
				if (!externalDAO.update(externalVO)) {
					return false;
				}
				
				// 3. insert external log then
				
				ExternalLogVO externalLogVO = new ExternalLogVO();
				externalLogVO.setFileid(externalVO.getFileid());
				externalLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				externalLogVO.setChangedesc(prepareChangeDesc(externalVO, orgExternalVO, userVO, FileOperations.EDIT));
				externalLogVO.setUserid(userVO.getUserid());
				externalLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!externalLogDAO.insert(externalLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer externalid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				ExternalVO externalVO = externalDAO.findByID(externalid);
				
				// 1. mark external as delete
				if (!externalDAO.delete(externalid)) {
					return false;
				}
				
				ExternalLogVO externalLogVO = new ExternalLogVO();
				externalLogVO.setFileid(externalVO.getFileid());
				externalLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				externalLogVO.setChangedesc(prepareChangeDesc(externalVO, userVO, FileOperations.DELETE));
				externalLogVO.setUserid(userVO.getUserid());
				externalLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!externalLogDAO.insert(externalLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<ExternalVO> fuzzyFind(ExternalQueryVO filter) {
		return externalDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(ExternalQueryVO filter) {
		return externalDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<ExternalVO> find(ExternalQueryVO filter) {
		return externalDAO.find(filter);
	}

	@Override
	public int totalFind(ExternalQueryVO filter) {
		return externalDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param externalVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(ExternalVO externalVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(externalVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newExternalVO
	 * @param orgExternalVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(ExternalVO newExternalVO, ExternalVO orgExternalVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer externalID = newExternalVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, externalID, descAdd(newExternalVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgExternalVO, newExternalVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, externalID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, externalID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, externalID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param externalVO
	 * @return
	 */
	private String descAdd(ExternalVO externalVO) {
		
		StringBuilder desc = new StringBuilder();

		String externalName = externalVO.getFilename();
		externalName = externalName == null || externalName.isEmpty() ? "" : externalName;
		descSingleAdd(desc, "文件名称", externalName);
		
		String externalNumber = externalVO.getFilenumber();
		externalNumber = externalNumber == null || externalNumber.isEmpty() ? "" : externalNumber;
		descSingleAdd(desc, "文件编号", externalNumber);

    String closed = externalVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String externalLabel = externalVO.getFilelabel();
		externalLabel = externalLabel == null || externalLabel.isEmpty() ? "" : externalLabel;
		descSingleAdd(desc, "文件标签", externalLabel);
		
		String externalDesc = externalVO.getFiledesc();
		externalDesc = externalDesc == null || externalDesc.isEmpty() ? "" : externalDesc;
		descSingleAdd(desc, "文件描述", externalDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origExternalVO
	 * @param newExternalVO
	 * @return
	 */
	private String descEdit(ExternalVO origExternalVO, ExternalVO newExternalVO) {

		// only compare externals with the same ID
		if (origExternalVO.getFileid() != newExternalVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// external name change
		if (!origExternalVO.getFilename().trim().equalsIgnoreCase(newExternalVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origExternalVO.getFilename(), newExternalVO.getFilename());
		}
		
		// external number change
		if (!origExternalVO.getFilenumber().trim().equalsIgnoreCase(newExternalVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origExternalVO.getFilenumber(), newExternalVO.getFilenumber());
		}

    if (origExternalVO.getClosed() != newExternalVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origExternalVO.getClosed(), newExternalVO.getClosed());
    }
		
		// external label change
		String orgExternalLabel = origExternalVO.getFilelabel() == null ? "" : origExternalVO.getFilelabel().trim();
		String newExternalLabel = newExternalVO.getFilelabel() == null ? "" : newExternalVO.getFilelabel().trim();
		
		if (!orgExternalLabel.trim().equalsIgnoreCase(newExternalLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgExternalLabel, newExternalLabel);
		}
		
		// external description change
		String orgExternalDesc = origExternalVO.getFiledesc() == null ? "" : origExternalVO.getFiledesc().trim();
		String newExternalDesc = newExternalVO.getFiledesc() == null ? "" : newExternalVO.getFiledesc().trim();
		
		if (!orgExternalDesc.equalsIgnoreCase(newExternalDesc)) {
			descSingleEdit(desc, "文件描述", orgExternalDesc, newExternalDesc);
		}
		
		// external upload change
		if (!origExternalVO.getLocation().equalsIgnoreCase(newExternalVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public ExternalDAO getExternalDAO() {
		return externalDAO;
	}

	public void setExternalDAO(ExternalDAO externalDAO) {
		this.externalDAO = externalDAO;
	}

	public ExternalLogDAO getExternalLogDAO() {
		return externalLogDAO;
	}

	public void setExternalLogDAO(ExternalLogDAO externalLogDAO) {
		this.externalLogDAO = externalLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
