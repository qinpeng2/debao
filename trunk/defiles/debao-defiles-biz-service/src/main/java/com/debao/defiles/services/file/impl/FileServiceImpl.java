package com.debao.defiles.services.file.impl;

import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.FileDAO;
import com.debao.defiles.dao.FileLogDAO;
import com.debao.defiles.services.file.FileService;
import com.debao.defiles.vo.FileLogVO;
import com.debao.defiles.vo.FileVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.FileQueryVO;

public class FileServiceImpl extends CommonFileService implements FileService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private FileDAO fileDAO;
	
	@Autowired
	private FileLogDAO fileLogDAO;

	@Override
	public FileVO findByID(Integer fileid) {
		return fileDAO.findByID(fileid);
	}

	@Override
	public boolean insert(final FileVO fileVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert file first
				if (!fileDAO.insert(fileVO)) {
					return false;
				}

				fileVO.setFileid(fileDAO.insertedID());
				
				// insert file log then
				
				FileLogVO fileLogVO = new FileLogVO();
				fileLogVO.setFileid(fileVO.getFileid());
				fileLogVO.setFileoptid(FileOperations.ADD.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(fileVO, userVO, FileOperations.ADD));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!fileLogDAO.insert(fileLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final FileVO fileVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original file first
				FileVO orgFileVO = fileDAO.findByID(fileVO.getFileid());
				
				// 2. update file then
				if (!fileDAO.update(fileVO)) {
					return false;
				}
				
				// 3. insert file log then
				
				FileLogVO fileLogVO = new FileLogVO();
				fileLogVO.setFileid(fileVO.getFileid());
				fileLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(fileVO, orgFileVO, userVO, FileOperations.EDIT));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!fileLogDAO.insert(fileLogVO)) {
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
				
				FileVO fileVO = fileDAO.findByID(fileid);
				
				// 1. mark file as delete
				if (!fileDAO.delete(fileid)) {
					return false;
				}
				
				FileLogVO fileLogVO = new FileLogVO();
				fileLogVO.setFileid(fileVO.getFileid());
				fileLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(fileVO, userVO, FileOperations.DELETE));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!fileLogDAO.insert(fileLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<FileVO> fuzzyFind(FileQueryVO filter) {
		return fileDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(FileQueryVO filter) {
		return fileDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<FileVO> find(FileQueryVO filter) {
		return fileDAO.find(filter);
	}

	@Override
	public int totalFind(FileQueryVO filter) {
		return fileDAO.totalFind(filter);
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
	public String prepareChangeDesc(FileVO fileVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(fileVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newFileVO
	 * @param orgFileVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(FileVO newFileVO, FileVO orgFileVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer fileID = newFileVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, fileID, descAdd(newFileVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgFileVO, newFileVO);
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
	private String descAdd(FileVO fileVO) {
		
		StringBuilder desc = new StringBuilder();
		
		Integer categoryID = fileVO.getCategoryid();
		categoryID = categoryID == null ? 0 : categoryID;
		descSingleAdd(desc, "分类编号", categoryID);
		
		String fileName = fileVO.getFilename();
		fileName = fileName == null || fileName.isEmpty() ? "" : fileName;
		descSingleAdd(desc, "文件名称", fileName);
		
		String fileNumber = fileVO.getFilenumber();
		fileNumber = fileNumber == null || fileNumber.isEmpty() ? "" : fileNumber;
		descSingleAdd(desc, "文件编号", fileNumber);
		
		String fileLabel = fileVO.getFilelabel();
		fileLabel = fileLabel == null || fileLabel.isEmpty() ? "" : fileLabel;
		descSingleAdd(desc, "文件标签", fileLabel);
		
		String fileDesc = fileVO.getFiledesc();
		fileDesc = fileDesc == null || fileDesc.isEmpty() ? "" : fileDesc;
		descSingleAdd(desc, "文件描述", fileDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origFileVO
	 * @param newFileVO
	 * @return
	 */
	private String descEdit(FileVO origFileVO, FileVO newFileVO) {

		// only compare files with the same ID
		if (origFileVO.getFileid() != newFileVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();
		
		// category change
		if (origFileVO.getCategoryid() != newFileVO.getCategoryid()) {
			descSingleEdit(desc, "分类变更", origFileVO.getCategoryid(), newFileVO.getCategoryid());
		}
		
		// file name change
		if (!origFileVO.getFilename().trim().equalsIgnoreCase(newFileVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origFileVO.getFilename(), newFileVO.getFilename());
		}
		
		// file number change
		if (!origFileVO.getFilenumber().trim().equalsIgnoreCase(newFileVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origFileVO.getFilenumber(), newFileVO.getFilenumber());
		}
		
		// file label change
		String orgFileLabel = origFileVO.getFilelabel() == null ? "" : origFileVO.getFilelabel().trim();
		String newFileLabel = newFileVO.getFilelabel() == null ? "" : newFileVO.getFilelabel().trim();
		
		if (!orgFileLabel.trim().equalsIgnoreCase(newFileLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgFileLabel, newFileLabel);
		}
		
		// file description change
		String orgFileDesc = origFileVO.getFiledesc() == null ? "" : origFileVO.getFiledesc().trim();
		String newFileDesc = newFileVO.getFiledesc() == null ? "" : newFileVO.getFiledesc().trim();
		
		if (!orgFileDesc.equalsIgnoreCase(newFileDesc)) {
			descSingleEdit(desc, "文件描述", orgFileDesc, newFileDesc);
		}
		
		// file upload change
		if (!origFileVO.getLocation().equalsIgnoreCase(newFileVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}
	

	/******************************Getter & Setter*******************************************/

	public FileDAO getFileDAO() {
		return fileDAO;
	}

	public void setFileDAO(FileDAO fileDAO) {
		this.fileDAO = fileDAO;
	}

	public FileLogDAO getFileLogDAO() {
		return fileLogDAO;
	}

	public void setFileLogDAO(FileLogDAO fileLogDAO) {
		this.fileLogDAO = fileLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
