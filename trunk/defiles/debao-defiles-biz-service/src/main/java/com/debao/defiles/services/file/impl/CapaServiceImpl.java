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

public class CapaServiceImpl extends CommonFileService implements CapaService {
	
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
	public boolean insert(final CapaVO capaVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert file first
				if (!capaDAO.insert(capaVO)) {
					return false;
				}

				capaVO.setFileid(capaDAO.insertedID());
				
				// insert file log then
				
				CapaLogVO capaLogVO = new CapaLogVO();
				capaLogVO.setFileid(capaVO.getFileid());
				capaLogVO.setFileoptid(FileOperations.ADD.ordinal());
				capaLogVO.setChangedesc(prepareChangeDesc(capaVO, userVO, FileOperations.ADD));
				capaLogVO.setUserid(userVO.getUserid());
				capaLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!capaLogDAO.insert(capaLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final CapaVO capaVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original file first
				CapaVO orgCapaVO = capaDAO.findByID(capaVO.getFileid());
				
				// 2. update file then
				if (!capaDAO.update(capaVO)) {
					return false;
				}
				
				// 3. insert file log then
				
				CapaLogVO capaLogVO = new CapaLogVO();
				capaLogVO.setFileid(capaVO.getFileid());
				capaLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				capaLogVO.setChangedesc(prepareChangeDesc(capaVO, orgCapaVO, userVO, FileOperations.EDIT));
				capaLogVO.setUserid(userVO.getUserid());
				capaLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!capaLogDAO.insert(capaLogVO)) {
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
				
				CapaVO capaVO = capaDAO.findByID(fileid);
				
				// 1. mark file as delete
				if (!capaDAO.delete(fileid)) {
					return false;
				}
				
				CapaLogVO capaLogVO = new CapaLogVO();
				capaLogVO.setFileid(capaVO.getFileid());
				capaLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				capaLogVO.setChangedesc(prepareChangeDesc(capaVO, userVO, FileOperations.DELETE));
				capaLogVO.setUserid(userVO.getUserid());
				capaLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!capaLogDAO.insert(capaLogVO)) {
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
	 * @param capaVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(CapaVO capaVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(capaVO, null, userVO, opt);
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
		Integer fileID = newCapaVO.getFileid();
		
		
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
	 * @param capaVO
	 * @return
	 */
	private String descAdd(CapaVO capaVO) {
		
		StringBuilder desc = new StringBuilder();
		
		String fileName = capaVO.getFilename();
		fileName = fileName == null || fileName.isEmpty() ? "" : fileName;
		descSingleAdd(desc, "文件名称", fileName);
		
		String fileNumber = capaVO.getFilenumber();
		fileNumber = fileNumber == null || fileNumber.isEmpty() ? "" : fileNumber;
		descSingleAdd(desc, "文件编号", fileNumber);

    String capaSource = capaVO.getCapasource();
    capaSource = capaSource == null || capaSource.isEmpty() ? "" : capaSource;
    descSingleAdd(desc, "CAPA来源", capaSource);

    String closed = capaVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String fileLabel = capaVO.getFilelabel();
		fileLabel = fileLabel == null || fileLabel.isEmpty() ? "" : fileLabel;
		descSingleAdd(desc, "文件标签", fileLabel);
		
		String fileDesc = capaVO.getFiledesc();
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
		if (origCapaVO.getFileid() != newCapaVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// file name change
		if (!origCapaVO.getFilename().trim().equalsIgnoreCase(newCapaVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origCapaVO.getFilename(), newCapaVO.getFilename());
		}
		
		// file number change
		if (!origCapaVO.getFilenumber().trim().equalsIgnoreCase(newCapaVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origCapaVO.getFilenumber(), newCapaVO.getFilenumber());
		}

    // capa source change
    String orgCapaSrc = origCapaVO.getCapasource() == null ? "" : origCapaVO.getCapasource().trim();
    String newCapaSrc = newCapaVO.getCapasource() == null ? "" : newCapaVO.getCapasource().trim();

    if (!orgCapaSrc.trim().equalsIgnoreCase(newCapaSrc.trim())) {
      descSingleEdit(desc, "CAPA来源", orgCapaSrc, newCapaSrc);
    }

    // file number change
    if (origCapaVO.getClosed() != newCapaVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origCapaVO.getClosed(), newCapaVO.getClosed());
    }
		
		// file label change
		String orgCapaLabel = origCapaVO.getFilelabel() == null ? "" : origCapaVO.getFilelabel().trim();
		String newCapaLabel = newCapaVO.getFilelabel() == null ? "" : newCapaVO.getFilelabel().trim();
		
		if (!orgCapaLabel.trim().equalsIgnoreCase(newCapaLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgCapaLabel, newCapaLabel);
		}
		
		// file description change
		String orgCapaDesc = origCapaVO.getFiledesc() == null ? "" : origCapaVO.getFiledesc().trim();
		String newCapaDesc = newCapaVO.getFiledesc() == null ? "" : newCapaVO.getFiledesc().trim();
		
		if (!orgCapaDesc.equalsIgnoreCase(newCapaDesc)) {
			descSingleEdit(desc, "文件描述", orgCapaDesc, newCapaDesc);
		}
		
		// file upload change
		if (!origCapaVO.getLocation().equalsIgnoreCase(newCapaVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
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
