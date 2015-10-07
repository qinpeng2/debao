package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.DriftDAO;
import com.debao.defiles.dao.DriftLogDAO;
import com.debao.defiles.services.file.DriftService;
import com.debao.defiles.vo.DriftLogVO;
import com.debao.defiles.vo.DriftVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.DriftQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class DriftServiceImpl extends CommonFileService implements DriftService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private DriftDAO driftDAO;
	
	@Autowired
	private DriftLogDAO driftLogDAO;

	@Override
	public DriftVO findByID(Integer driftid) {
		return driftDAO.findByID(driftid);
	}

	@Override
	public boolean insert(final DriftVO driftVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert drift first
				if (!driftDAO.insert(driftVO)) {
					return false;
				}

				driftVO.setFileid(driftDAO.insertedID());
				
				// insert drift log then
				
				DriftLogVO driftLogVO = new DriftLogVO();
				driftLogVO.setFileid(driftVO.getFileid());
				driftLogVO.setFileoptid(FileOperations.ADD.ordinal());
				driftLogVO.setChangedesc(prepareChangeDesc(driftVO, userVO, FileOperations.ADD));
				driftLogVO.setUserid(userVO.getUserid());
				driftLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!driftLogDAO.insert(driftLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final DriftVO driftVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original drift first
				DriftVO orgDriftVO = driftDAO.findByID(driftVO.getFileid());

				// 2. update drift then
				if (!driftDAO.update(driftVO)) {
					return false;
				}
				
				// 3. insert drift log then
				
				DriftLogVO driftLogVO = new DriftLogVO();
				driftLogVO.setFileid(driftVO.getFileid());
				driftLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				driftLogVO.setChangedesc(prepareChangeDesc(driftVO, orgDriftVO, userVO, FileOperations.EDIT));
				driftLogVO.setUserid(userVO.getUserid());
				driftLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!driftLogDAO.insert(driftLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer driftid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				DriftVO driftVO = driftDAO.findByID(driftid);
				
				// 1. mark drift as delete
				if (!driftDAO.delete(driftid)) {
					return false;
				}
				
				DriftLogVO driftLogVO = new DriftLogVO();
				driftLogVO.setFileid(driftVO.getFileid());
				driftLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				driftLogVO.setChangedesc(prepareChangeDesc(driftVO, userVO, FileOperations.DELETE));
				driftLogVO.setUserid(userVO.getUserid());
				driftLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!driftLogDAO.insert(driftLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<DriftVO> fuzzyFind(DriftQueryVO filter) {
		return driftDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(DriftQueryVO filter) {
		return driftDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<DriftVO> find(DriftQueryVO filter) {
		return driftDAO.find(filter);
	}

	@Override
	public int totalFind(DriftQueryVO filter) {
		return driftDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param driftVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(DriftVO driftVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(driftVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newDriftVO
	 * @param orgDriftVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(DriftVO newDriftVO, DriftVO orgDriftVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer driftID = newDriftVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, driftID, descAdd(newDriftVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgDriftVO, newDriftVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, driftID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, driftID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, driftID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param driftVO
	 * @return
	 */
	private String descAdd(DriftVO driftVO) {
		
		StringBuilder desc = new StringBuilder();

		String driftName = driftVO.getFilename();
		driftName = driftName == null || driftName.isEmpty() ? "" : driftName;
		descSingleAdd(desc, "文件名称", driftName);
		
		String driftNumber = driftVO.getFilenumber();
		driftNumber = driftNumber == null || driftNumber.isEmpty() ? "" : driftNumber;
		descSingleAdd(desc, "文件编号", driftNumber);

    String closed = driftVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String driftLabel = driftVO.getFilelabel();
		driftLabel = driftLabel == null || driftLabel.isEmpty() ? "" : driftLabel;
		descSingleAdd(desc, "文件标签", driftLabel);
		
		String driftDesc = driftVO.getFiledesc();
		driftDesc = driftDesc == null || driftDesc.isEmpty() ? "" : driftDesc;
		descSingleAdd(desc, "文件描述", driftDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origDriftVO
	 * @param newDriftVO
	 * @return
	 */
	private String descEdit(DriftVO origDriftVO, DriftVO newDriftVO) {

		// only compare drifts with the same ID
		if (origDriftVO.getFileid() != newDriftVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// drift name change
		if (!origDriftVO.getFilename().trim().equalsIgnoreCase(newDriftVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origDriftVO.getFilename(), newDriftVO.getFilename());
		}
		
		// drift number change
		if (!origDriftVO.getFilenumber().trim().equalsIgnoreCase(newDriftVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origDriftVO.getFilenumber(), newDriftVO.getFilenumber());
		}

    if (origDriftVO.getClosed() != newDriftVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origDriftVO.getClosed(), newDriftVO.getClosed());
    }
		
		// drift label change
		String orgDriftLabel = origDriftVO.getFilelabel() == null ? "" : origDriftVO.getFilelabel().trim();
		String newDriftLabel = newDriftVO.getFilelabel() == null ? "" : newDriftVO.getFilelabel().trim();
		
		if (!orgDriftLabel.trim().equalsIgnoreCase(newDriftLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgDriftLabel, newDriftLabel);
		}
		
		// drift description change
		String orgDriftDesc = origDriftVO.getFiledesc() == null ? "" : origDriftVO.getFiledesc().trim();
		String newDriftDesc = newDriftVO.getFiledesc() == null ? "" : newDriftVO.getFiledesc().trim();
		
		if (!orgDriftDesc.equalsIgnoreCase(newDriftDesc)) {
			descSingleEdit(desc, "文件描述", orgDriftDesc, newDriftDesc);
		}
		
		// drift upload change
		if (!origDriftVO.getLocation().equalsIgnoreCase(newDriftVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public DriftDAO getDriftDAO() {
		return driftDAO;
	}

	public void setDriftDAO(DriftDAO driftDAO) {
		this.driftDAO = driftDAO;
	}

	public DriftLogDAO getDriftLogDAO() {
		return driftLogDAO;
	}

	public void setDriftLogDAO(DriftLogDAO driftLogDAO) {
		this.driftLogDAO = driftLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
