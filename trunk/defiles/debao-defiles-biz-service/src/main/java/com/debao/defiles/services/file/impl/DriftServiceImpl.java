package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
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

public class DriftServiceImpl implements DriftService {
	
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

				driftVO.setDriftid(driftDAO.insertedID());
				
				// insert drift log then
				
				DriftLogVO driftLogVO = new DriftLogVO();
				driftLogVO.setDriftid(driftVO.getDriftid());
				driftLogVO.setDriftoptid(DriftOperations.ADD.ordinal());
				driftLogVO.setChangedesc(prepareChangeDesc(driftVO, userVO, DriftOperations.ADD));
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
				DriftVO orgDriftVO = driftDAO.findByID(driftVO.getDriftid());
				
				// 2. update drift then
				if (!driftDAO.update(driftVO)) {
					return false;
				}
				
				// 3. insert drift log then
				
				DriftLogVO driftLogVO = new DriftLogVO();
				driftLogVO.setDriftid(driftVO.getDriftid());
				driftLogVO.setDriftoptid(DriftOperations.EDIT.ordinal());
				driftLogVO.setChangedesc(prepareChangeDesc(driftVO, orgDriftVO, userVO, DriftOperations.EDIT));
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
				driftLogVO.setDriftid(driftVO.getDriftid());
				driftLogVO.setDriftoptid(DriftOperations.DELETE.ordinal());
				driftLogVO.setChangedesc(prepareChangeDesc(driftVO, userVO, DriftOperations.DELETE));
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
	public String prepareChangeDesc(DriftVO driftVO, UserVO userVO, DriftOperations opt) {
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
	public String prepareChangeDesc(DriftVO newDriftVO, DriftVO orgDriftVO, UserVO userVO, DriftOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer driftID = newDriftVO.getDriftid();
		
		
		if (opt == DriftOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, driftID, descAdd(newDriftVO));
		} else if (opt == DriftOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgDriftVO, newDriftVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, driftID, descEdit);
			}
		} else if (opt == DriftOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, driftID);
		} else if (opt == DriftOperations.VIEW) {
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
		
		Integer categoryID = driftVO.getCategoryid();
		categoryID = categoryID == null ? 0 : categoryID;
		descSingleAdd(desc, "分类编号", categoryID);
		
		String driftName = driftVO.getDriftname();
		driftName = driftName == null || driftName.isEmpty() ? "" : driftName;
		descSingleAdd(desc, "文件名称", driftName);
		
		String driftNumber = driftVO.getDriftnumber();
		driftNumber = driftNumber == null || driftNumber.isEmpty() ? "" : driftNumber;
		descSingleAdd(desc, "文件编号", driftNumber);
		
		String driftLabel = driftVO.getDriftlabel();
		driftLabel = driftLabel == null || driftLabel.isEmpty() ? "" : driftLabel;
		descSingleAdd(desc, "文件标签", driftLabel);
		
		String driftDesc = driftVO.getDriftdesc();
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
		if (origDriftVO.getDriftid() != newDriftVO.getDriftid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();
		
		// category change
		if (origDriftVO.getCategoryid() != newDriftVO.getCategoryid()) {
			descSingleEdit(desc, "分类变更", origDriftVO.getCategoryid(), newDriftVO.getCategoryid());
		}
		
		// drift name change
		if (!origDriftVO.getDriftname().trim().equals(newDriftVO.getDriftname().trim())) {
			descSingleEdit(desc, "文件名称", origDriftVO.getDriftname(), newDriftVO.getDriftname());
		}
		
		// drift number change
		if (!origDriftVO.getDriftnumber().trim().equals(newDriftVO.getDriftnumber().trim())) {
			descSingleEdit(desc, "文件编号", origDriftVO.getDriftnumber(), newDriftVO.getDriftnumber());
		}
		
		// drift label change
		String orgDriftLabel = origDriftVO.getDriftlabel() == null ? "" : origDriftVO.getDriftlabel().trim();
		String newDriftLabel = newDriftVO.getDriftlabel() == null ? "" : newDriftVO.getDriftlabel().trim();
		
		if (!orgDriftLabel.trim().equals(newDriftLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgDriftLabel, newDriftLabel);
		}
		
		// drift description change
		String orgDriftDesc = origDriftVO.getDriftdesc() == null ? "" : origDriftVO.getDriftdesc().trim();
		String newDriftDesc = newDriftVO.getDriftdesc() == null ? "" : newDriftVO.getDriftdesc().trim();
		
		if (!orgDriftDesc.equals(newDriftDesc)) {
			descSingleEdit(desc, "文件描述", orgDriftDesc, newDriftDesc);
		}
		
		// drift upload change
		if (!origDriftVO.getLocation().equals(newDriftVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}
	
	/**
	 * 新增文件Log中的一行描述
	 * 
	 * @param target
	 * @param name
	 * @param value
	 */
	private void descSingleAdd(StringBuilder target, String name, Object value) {
		target.append(name).append("： ").append(value).append("; \n");
	}
	
	/**
	 * 修改文件Log中的一行描述
	 * 
	 * @param target
	 * @param name
	 * @param oldValue
	 * @param newValue
	 */
	private void descSingleEdit(StringBuilder target, String name, Object oldValue, Object newValue) {
		target.append(name).append("： 由 ").append(oldValue).append(" 变为 ").append(newValue).append("; \n");
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
