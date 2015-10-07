package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.CapaDAO;
import com.debao.defiles.dao.CapaLogDAO;
import com.debao.defiles.services.file.CapaService;
import com.debao.defiles.vo.CapaLogVO;
import com.debao.defiles.vo.CapaVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.CapaQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class CapaServiceImpl implements CapaService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private CapaDAO capaDAO;
	
	@Autowired
	private CapaLogDAO capaLogDAO;

	@Override
	public CapaVO findByID(Integer fileid) {
		return capaDAO.findByID(fileid);
	}

	@Override
	public boolean insert(final CapaVO fileVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert file first
				if (!capaDAO.insert(fileVO)) {
					return false;
				}

				fileVO.setCapaid(capaDAO.insertedID());
				
				// insert file log then
				
				CapaLogVO fileLogVO = new CapaLogVO();
				fileLogVO.setCapaid(fileVO.getCapaid());
				fileLogVO.setCapaoptid(CapaOperations.ADD.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(fileVO, userVO, CapaOperations.ADD));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!capaLogDAO.insert(fileLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final CapaVO fileVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original file first
				CapaVO orgCapaVO = capaDAO.findByID(fileVO.getCapaid());
				
				// 2. update file then
				if (!capaDAO.update(fileVO)) {
					return false;
				}
				
				// 3. insert file log then
				
				CapaLogVO fileLogVO = new CapaLogVO();
				fileLogVO.setCapaid(fileVO.getCapaid());
				fileLogVO.setCapaoptid(CapaOperations.EDIT.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(fileVO, orgCapaVO, userVO, CapaOperations.EDIT));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!capaLogDAO.insert(fileLogVO)) {
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
				
				CapaVO fileVO = capaDAO.findByID(fileid);
				
				// 1. mark file as delete
				if (!capaDAO.delete(fileid)) {
					return false;
				}
				
				CapaLogVO fileLogVO = new CapaLogVO();
				fileLogVO.setCapaid(fileVO.getCapaid());
				fileLogVO.setCapaoptid(CapaOperations.DELETE.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(fileVO, userVO, CapaOperations.DELETE));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!capaLogDAO.insert(fileLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<CapaVO> fuzzyFind(CapaQueryVO filter) {
		return capaDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(CapaQueryVO filter) {
		return capaDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<CapaVO> find(CapaQueryVO filter) {
		return capaDAO.find(filter);
	}

	@Override
	public int totalFind(CapaQueryVO filter) {
		return capaDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param fileVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(CapaVO fileVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(fileVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newCapaVO
	 * @param orgCapaVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(CapaVO newCapaVO, CapaVO orgCapaVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer fileID = newCapaVO.getCapaid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, fileID, descAdd(newCapaVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgCapaVO, newCapaVO);
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
	 * @param fileVO
	 * @return
	 */
	private String descAdd(CapaVO fileVO) {
		
		StringBuilder desc = new StringBuilder();
		
		Integer categoryID = fileVO.getCategoryid();
		categoryID = categoryID == null ? 0 : categoryID;
		descSingleAdd(desc, "分类编号", categoryID);
		
		String fileName = fileVO.getCapaname();
		fileName = fileName == null || fileName.isEmpty() ? "" : fileName;
		descSingleAdd(desc, "文件名称", fileName);
		
		String fileNumber = fileVO.getCapanumber();
		fileNumber = fileNumber == null || fileNumber.isEmpty() ? "" : fileNumber;
		descSingleAdd(desc, "文件编号", fileNumber);
		
		String fileLabel = fileVO.getCapalabel();
		fileLabel = fileLabel == null || fileLabel.isEmpty() ? "" : fileLabel;
		descSingleAdd(desc, "文件标签", fileLabel);
		
		String fileDesc = fileVO.getCapadesc();
		fileDesc = fileDesc == null || fileDesc.isEmpty() ? "" : fileDesc;
		descSingleAdd(desc, "文件描述", fileDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origCapaVO
	 * @param newCapaVO
	 * @return
	 */
	private String descEdit(CapaVO origCapaVO, CapaVO newCapaVO) {

		// only compare files with the same ID
		if (origCapaVO.getCapaid() != newCapaVO.getCapaid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();
		
		// category change
		if (origCapaVO.getCategoryid() != newCapaVO.getCategoryid()) {
			descSingleEdit(desc, "分类变更", origCapaVO.getCategoryid(), newCapaVO.getCategoryid());
		}
		
		// file name change
		if (!origCapaVO.getCapaname().trim().equals(newCapaVO.getCapaname().trim())) {
			descSingleEdit(desc, "文件名称", origCapaVO.getCapaname(), newCapaVO.getCapaname());
		}
		
		// file number change
		if (!origCapaVO.getCapanumber().trim().equals(newCapaVO.getCapanumber().trim())) {
			descSingleEdit(desc, "文件编号", origCapaVO.getCapanumber(), newCapaVO.getCapanumber());
		}
		
		// file label change
		String orgCapaLabel = origCapaVO.getCapalabel() == null ? "" : origCapaVO.getCapalabel().trim();
		String newCapaLabel = newCapaVO.getCapalabel() == null ? "" : newCapaVO.getCapalabel().trim();
		
		if (!orgCapaLabel.trim().equals(newCapaLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgCapaLabel, newCapaLabel);
		}
		
		// file description change
		String orgCapaDesc = origCapaVO.getCapadesc() == null ? "" : origCapaVO.getCapadesc().trim();
		String newCapaDesc = newCapaVO.getCapadesc() == null ? "" : newCapaVO.getCapadesc().trim();
		
		if (!orgCapaDesc.equals(newCapaDesc)) {
			descSingleEdit(desc, "文件描述", orgCapaDesc, newCapaDesc);
		}
		
		// file upload change
		if (!origCapaVO.getLocation().equals(newCapaVO.getLocation())) {
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

	public CapaDAO getCapaDAO() {
		return capaDAO;
	}

	public void setCapaDAO(CapaDAO capaDAO) {
		this.capaDAO = capaDAO;
	}

	public CapaLogDAO getCapaLogDAO() {
		return capaLogDAO;
	}

	public void setCapaLogDAO(CapaLogDAO fileLogDAO) {
		this.capaLogDAO = fileLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
