package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.VideoDAO;
import com.debao.defiles.dao.VideoLogDAO;
import com.debao.defiles.services.file.VideoService;
import com.debao.defiles.vo.FileLogVO;
import com.debao.defiles.vo.VideoVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.VideoQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class VideoServiceImpl implements VideoService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private VideoDAO videoDAO;
	
	@Autowired
	private VideoLogDAO videoLogDAO;

	@Override
	public VideoVO findByID(Integer fileid) {
		return videoDAO.findByID(fileid);
	}

	@Override
	public boolean insert(final VideoVO videoVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert file first
				if (!videoDAO.insert(videoVO)) {
					return false;
				}

				videoVO.setVideoid(videoDAO.insertedID());
				
				// insert file log then
				
				FileLogVO fileLogVO = new FileLogVO();
				fileLogVO.setFileid(videoVO.getVideoid());
				fileLogVO.setFileoptid(FileOperations.ADD.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(videoVO, userVO, FileOperations.ADD));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!videoLogDAO.insert(fileLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final VideoVO videoVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original file first
				VideoVO orgVideoVO = videoDAO.findByID(videoVO.getFileid());
				
				// 2. update file then
				if (!videoDAO.update(videoVO)) {
					return false;
				}
				
				// 3. insert file log then
				
				FileLogVO fileLogVO = new FileLogVO();
				fileLogVO.setFileid(videoVO.getFileid());
				fileLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(videoVO, orgVideoVO, userVO, FileOperations.EDIT));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!videoLogDAO.insert(fileLogVO)) {
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
				
				VideoVO videoVO = videoDAO.findByID(fileid);
				
				// 1. mark file as delete
				if (!videoDAO.delete(fileid)) {
					return false;
				}
				
				FileLogVO fileLogVO = new FileLogVO();
				fileLogVO.setFileid(videoVO.getFileid());
				fileLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				fileLogVO.setChangedesc(prepareChangeDesc(videoVO, userVO, FileOperations.DELETE));
				fileLogVO.setUserid(userVO.getUserid());
				fileLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!videoLogDAO.insert(fileLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<VideoVO> fuzzyFind(VideoQueryVO filter) {
		return videoDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(VideoQueryVO filter) {
		return videoDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<VideoVO> find(VideoQueryVO filter) {
		return videoDAO.find(filter);
	}

	@Override
	public int totalFind(VideoQueryVO filter) {
		return videoDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param videoVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(VideoVO videoVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(videoVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newVideoVO
	 * @param orgVideoVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(VideoVO newVideoVO, VideoVO orgVideoVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer fileID = newVideoVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, fileID, descAdd(newVideoVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgVideoVO, newVideoVO);
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
	 * @param videoVO
	 * @return
	 */
	private String descAdd(VideoVO videoVO) {
		
		StringBuilder desc = new StringBuilder();
		
		Integer categoryID = videoVO.getCategoryid();
		categoryID = categoryID == null ? 0 : categoryID;
		descSingleAdd(desc, "分类编号", categoryID);
		
		String fileName = videoVO.getFilename();
		fileName = fileName == null || fileName.isEmpty() ? "" : fileName;
		descSingleAdd(desc, "文件名称", fileName);
		
		String fileNumber = videoVO.getFilenumber();
		fileNumber = fileNumber == null || fileNumber.isEmpty() ? "" : fileNumber;
		descSingleAdd(desc, "文件编号", fileNumber);
		
		String fileLabel = videoVO.getFilelabel();
		fileLabel = fileLabel == null || fileLabel.isEmpty() ? "" : fileLabel;
		descSingleAdd(desc, "文件标签", fileLabel);
		
		String fileDesc = videoVO.getFiledesc();
		fileDesc = fileDesc == null || fileDesc.isEmpty() ? "" : fileDesc;
		descSingleAdd(desc, "文件描述", fileDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origVideoVO
	 * @param newVideoVO
	 * @return
	 */
	private String descEdit(VideoVO origVideoVO, VideoVO newVideoVO) {

		// only compare files with the same ID
		if (origVideoVO.getFileid() != newVideoVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();
		
		// category change
		if (origVideoVO.getCategoryid() != newVideoVO.getCategoryid()) {
			descSingleEdit(desc, "分类变更", origVideoVO.getCategoryid(), newVideoVO.getCategoryid());
		}
		
		// file name change
		if (!origVideoVO.getFilename().trim().equals(newVideoVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origVideoVO.getFilename(), newVideoVO.getFilename());
		}
		
		// file number change
		if (!origVideoVO.getFilenumber().trim().equals(newVideoVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origVideoVO.getFilenumber(), newVideoVO.getFilenumber());
		}
		
		// file label change
		String orgFileLabel = origVideoVO.getFilelabel() == null ? "" : origVideoVO.getFilelabel().trim();
		String newFileLabel = newVideoVO.getFilelabel() == null ? "" : newVideoVO.getFilelabel().trim();
		
		if (!orgFileLabel.trim().equals(newFileLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgFileLabel, newFileLabel);
		}
		
		// file description change
		String orgFileDesc = origVideoVO.getFiledesc() == null ? "" : origVideoVO.getFiledesc().trim();
		String newFileDesc = newVideoVO.getFiledesc() == null ? "" : newVideoVO.getFiledesc().trim();
		
		if (!orgFileDesc.equals(newFileDesc)) {
			descSingleEdit(desc, "文件描述", orgFileDesc, newFileDesc);
		}
		
		// file upload change
		if (!origVideoVO.getLocation().equals(newVideoVO.getLocation())) {
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

	public VideoDAO getVideoDAO() {
		return videoDAO;
	}

	public void setVideoDAO(VideoDAO fileDAO) {
		this.videoDAO = fileDAO;
	}

	public VideoLogDAO getVideoLogDAO() {
		return videoLogDAO;
	}

	public void setVideoLogDAO(VideoLogDAO fileLogDAO) {
		this.videoLogDAO = fileLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
