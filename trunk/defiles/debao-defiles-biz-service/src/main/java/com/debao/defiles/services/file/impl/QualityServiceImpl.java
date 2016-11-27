package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.QualityDAO;
import com.debao.defiles.dao.QualityLogDAO;
import com.debao.defiles.services.file.QualityService;
import com.debao.defiles.vo.QualityLogVO;
import com.debao.defiles.vo.QualityVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.QualityQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class QualityServiceImpl extends CommonFileService implements QualityService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private QualityDAO qualityDAO;
	
	@Autowired
	private QualityLogDAO qualityLogDAO;

	@Override
	public QualityVO findByID(Integer qualityid) {
		return qualityDAO.findByID(qualityid);
	}

	@Override
	public boolean insert(final QualityVO qualityVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert quality first
				if (!qualityDAO.insert(qualityVO)) {
					return false;
				}

				qualityVO.setFileid(qualityDAO.insertedID());
				
				// insert quality log then
				
				QualityLogVO qualityLogVO = new QualityLogVO();
				qualityLogVO.setFileid(qualityVO.getFileid());
				qualityLogVO.setFileoptid(FileOperations.ADD.ordinal());
				qualityLogVO.setChangedesc(prepareChangeDesc(qualityVO, userVO, FileOperations.ADD));
				qualityLogVO.setUserid(userVO.getUserid());
				qualityLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!qualityLogDAO.insert(qualityLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final QualityVO qualityVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original quality first
				QualityVO orgQualityVO = qualityDAO.findByID(qualityVO.getFileid());

				// 2. update quality then
				if (!qualityDAO.update(qualityVO)) {
					return false;
				}
				
				// 3. insert quality log then
				
				QualityLogVO qualityLogVO = new QualityLogVO();
				qualityLogVO.setFileid(qualityVO.getFileid());
				qualityLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				qualityLogVO.setChangedesc(prepareChangeDesc(qualityVO, orgQualityVO, userVO, FileOperations.EDIT));
				qualityLogVO.setUserid(userVO.getUserid());
				qualityLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!qualityLogDAO.insert(qualityLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer qualityid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				QualityVO qualityVO = qualityDAO.findByID(qualityid);
				
				// 1. mark quality as delete
				if (!qualityDAO.delete(qualityid)) {
					return false;
				}
				
				QualityLogVO qualityLogVO = new QualityLogVO();
				qualityLogVO.setFileid(qualityVO.getFileid());
				qualityLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				qualityLogVO.setChangedesc(prepareChangeDesc(qualityVO, userVO, FileOperations.DELETE));
				qualityLogVO.setUserid(userVO.getUserid());
				qualityLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!qualityLogDAO.insert(qualityLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<QualityVO> fuzzyFind(QualityQueryVO filter) {
		return qualityDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(QualityQueryVO filter) {
		return qualityDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<QualityVO> find(QualityQueryVO filter) {
		return qualityDAO.find(filter);
	}

	@Override
	public int totalFind(QualityQueryVO filter) {
		return qualityDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param qualityVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(QualityVO qualityVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(qualityVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newQualityVO
	 * @param orgQualityVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(QualityVO newQualityVO, QualityVO orgQualityVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer qualityID = newQualityVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, qualityID, descAdd(newQualityVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgQualityVO, newQualityVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, qualityID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, qualityID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, qualityID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param qualityVO
	 * @return
	 */
	private String descAdd(QualityVO qualityVO) {
		
		StringBuilder desc = new StringBuilder();

		String qualityName = qualityVO.getFilename();
		qualityName = qualityName == null || qualityName.isEmpty() ? "" : qualityName;
		descSingleAdd(desc, "文件名称", qualityName);
		
		String qualityNumber = qualityVO.getFilenumber();
		qualityNumber = qualityNumber == null || qualityNumber.isEmpty() ? "" : qualityNumber;
		descSingleAdd(desc, "文件编号", qualityNumber);

    Integer categoryId = qualityVO.getCategoryid();
    categoryId = categoryId == null || categoryId < 0 ? 0 : categoryId;
    descSingleAdd(desc, "文件分类", categoryId);
		
		String qualityLabel = qualityVO.getFilelabel();
		qualityLabel = qualityLabel == null || qualityLabel.isEmpty() ? "" : qualityLabel;
		descSingleAdd(desc, "文件标签", qualityLabel);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origQualityVO
	 * @param newQualityVO
	 * @return
	 */
	private String descEdit(QualityVO origQualityVO, QualityVO newQualityVO) {

		// only compare qualitys with the same ID
		if (origQualityVO.getFileid() != newQualityVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// quality name change
		if (!origQualityVO.getFilename().trim().equalsIgnoreCase(newQualityVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origQualityVO.getFilename(), newQualityVO.getFilename());
		}
		
		// quality number change
		if (!origQualityVO.getFilenumber().trim().equalsIgnoreCase(newQualityVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origQualityVO.getFilenumber(), newQualityVO.getFilenumber());
		}

    if (origQualityVO.getCategoryid() != newQualityVO.getCategoryid()) {
      descSingleEdit(desc, "文件分类", origQualityVO.getCategoryid(), newQualityVO.getCategoryid());
    }
		
		// quality label change
		String orgQualityLabel = origQualityVO.getFilelabel() == null ? "" : origQualityVO.getFilelabel().trim();
		String newQualityLabel = newQualityVO.getFilelabel() == null ? "" : newQualityVO.getFilelabel().trim();
		
		if (!orgQualityLabel.trim().equalsIgnoreCase(newQualityLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgQualityLabel, newQualityLabel);
		}
		
		// quality upload change
		if (!origQualityVO.getLocation().equalsIgnoreCase(newQualityVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public QualityDAO getQualityDAO() {
		return qualityDAO;
	}

	public void setQualityDAO(QualityDAO qualityDAO) {
		this.qualityDAO = qualityDAO;
	}

	public QualityLogDAO getQualityLogDAO() {
		return qualityLogDAO;
	}

	public void setQualityLogDAO(QualityLogDAO qualityLogDAO) {
		this.qualityLogDAO = qualityLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
