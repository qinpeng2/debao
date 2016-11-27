package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.SupplyDAO;
import com.debao.defiles.dao.SupplyLogDAO;
import com.debao.defiles.services.file.SupplyService;
import com.debao.defiles.vo.SupplyLogVO;
import com.debao.defiles.vo.SupplyVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.SupplyQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class SupplyServiceImpl extends CommonFileService implements SupplyService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private SupplyDAO supplyDAO;
	
	@Autowired
	private SupplyLogDAO supplyLogDAO;

	@Override
	public SupplyVO findByID(Integer supplyid) {
		return supplyDAO.findByID(supplyid);
	}

	@Override
	public boolean insert(final SupplyVO supplyVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert supply first
				if (!supplyDAO.insert(supplyVO)) {
					return false;
				}

				supplyVO.setFileid(supplyDAO.insertedID());
				
				// insert supply log then
				
				SupplyLogVO supplyLogVO = new SupplyLogVO();
				supplyLogVO.setFileid(supplyVO.getFileid());
				supplyLogVO.setFileoptid(FileOperations.ADD.ordinal());
				supplyLogVO.setChangedesc(prepareChangeDesc(supplyVO, userVO, FileOperations.ADD));
				supplyLogVO.setUserid(userVO.getUserid());
				supplyLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!supplyLogDAO.insert(supplyLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final SupplyVO supplyVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original supply first
				SupplyVO orgSupplyVO = supplyDAO.findByID(supplyVO.getFileid());

				// 2. update supply then
				if (!supplyDAO.update(supplyVO)) {
					return false;
				}
				
				// 3. insert supply log then
				
				SupplyLogVO supplyLogVO = new SupplyLogVO();
				supplyLogVO.setFileid(supplyVO.getFileid());
				supplyLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				supplyLogVO.setChangedesc(prepareChangeDesc(supplyVO, orgSupplyVO, userVO, FileOperations.EDIT));
				supplyLogVO.setUserid(userVO.getUserid());
				supplyLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!supplyLogDAO.insert(supplyLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer supplyid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				SupplyVO supplyVO = supplyDAO.findByID(supplyid);
				
				// 1. mark supply as delete
				if (!supplyDAO.delete(supplyid)) {
					return false;
				}
				
				SupplyLogVO supplyLogVO = new SupplyLogVO();
				supplyLogVO.setFileid(supplyVO.getFileid());
				supplyLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				supplyLogVO.setChangedesc(prepareChangeDesc(supplyVO, userVO, FileOperations.DELETE));
				supplyLogVO.setUserid(userVO.getUserid());
				supplyLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!supplyLogDAO.insert(supplyLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<SupplyVO> fuzzyFind(SupplyQueryVO filter) {
		return supplyDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(SupplyQueryVO filter) {
		return supplyDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<SupplyVO> find(SupplyQueryVO filter) {
		return supplyDAO.find(filter);
	}

	@Override
	public int totalFind(SupplyQueryVO filter) {
		return supplyDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param supplyVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(SupplyVO supplyVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(supplyVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newSupplyVO
	 * @param orgSupplyVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(SupplyVO newSupplyVO, SupplyVO orgSupplyVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer supplyID = newSupplyVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, supplyID, descAdd(newSupplyVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgSupplyVO, newSupplyVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, supplyID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, supplyID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, supplyID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param supplyVO
	 * @return
	 */
	private String descAdd(SupplyVO supplyVO) {
		
		StringBuilder desc = new StringBuilder();

		String supplyName = supplyVO.getFilename();
		supplyName = supplyName == null || supplyName.isEmpty() ? "" : supplyName;
		descSingleAdd(desc, "文件名称", supplyName);
		
		String supplyNumber = supplyVO.getFilenumber();
		supplyNumber = supplyNumber == null || supplyNumber.isEmpty() ? "" : supplyNumber;
		descSingleAdd(desc, "文件编号", supplyNumber);

    String closed = supplyVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String supplyLabel = supplyVO.getFilelabel();
		supplyLabel = supplyLabel == null || supplyLabel.isEmpty() ? "" : supplyLabel;
		descSingleAdd(desc, "文件标签", supplyLabel);
		
		String supplyDesc = supplyVO.getFiledesc();
		supplyDesc = supplyDesc == null || supplyDesc.isEmpty() ? "" : supplyDesc;
		descSingleAdd(desc, "文件描述", supplyDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origSupplyVO
	 * @param newSupplyVO
	 * @return
	 */
	private String descEdit(SupplyVO origSupplyVO, SupplyVO newSupplyVO) {

		// only compare supplys with the same ID
		if (origSupplyVO.getFileid() != newSupplyVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// supply name change
		if (!origSupplyVO.getFilename().trim().equalsIgnoreCase(newSupplyVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origSupplyVO.getFilename(), newSupplyVO.getFilename());
		}
		
		// supply number change
		if (!origSupplyVO.getFilenumber().trim().equalsIgnoreCase(newSupplyVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origSupplyVO.getFilenumber(), newSupplyVO.getFilenumber());
		}

    if (origSupplyVO.getClosed() != newSupplyVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origSupplyVO.getClosed(), newSupplyVO.getClosed());
    }
		
		// supply label change
		String orgSupplyLabel = origSupplyVO.getFilelabel() == null ? "" : origSupplyVO.getFilelabel().trim();
		String newSupplyLabel = newSupplyVO.getFilelabel() == null ? "" : newSupplyVO.getFilelabel().trim();
		
		if (!orgSupplyLabel.trim().equalsIgnoreCase(newSupplyLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgSupplyLabel, newSupplyLabel);
		}
		
		// supply description change
		String orgSupplyDesc = origSupplyVO.getFiledesc() == null ? "" : origSupplyVO.getFiledesc().trim();
		String newSupplyDesc = newSupplyVO.getFiledesc() == null ? "" : newSupplyVO.getFiledesc().trim();
		
		if (!orgSupplyDesc.equalsIgnoreCase(newSupplyDesc)) {
			descSingleEdit(desc, "文件描述", orgSupplyDesc, newSupplyDesc);
		}
		
		// supply upload change
		if (!origSupplyVO.getLocation().equalsIgnoreCase(newSupplyVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public SupplyDAO getSupplyDAO() {
		return supplyDAO;
	}

	public void setSupplyDAO(SupplyDAO supplyDAO) {
		this.supplyDAO = supplyDAO;
	}

	public SupplyLogDAO getSupplyLogDAO() {
		return supplyLogDAO;
	}

	public void setSupplyLogDAO(SupplyLogDAO supplyLogDAO) {
		this.supplyLogDAO = supplyLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
