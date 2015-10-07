package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.VideoDAO;
import com.debao.defiles.dao.VideoLogDAO;
import com.debao.defiles.services.file.VideoService;
import com.debao.defiles.vo.VideoLogVO;
import com.debao.defiles.vo.VideoVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.VideoQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class VideoServiceImpl extends CommonFileService implements VideoService {
	
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
				
				VideoLogVO videoLogVO = new VideoLogVO();
				videoLogVO.setVideoid(videoVO.getVideoid());
				videoLogVO.setVideooptid(FileOperations.ADD.ordinal());
				videoLogVO.setChangedesc(prepareChangeDesc(videoVO, userVO, FileOperations.ADD));
				videoLogVO.setUserid(userVO.getUserid());
				videoLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!videoLogDAO.insert(videoLogVO)) {
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
				VideoVO orgVideoVO = videoDAO.findByID(videoVO.getVideoid());
				
				// 2. update file then
				if (!videoDAO.update(videoVO)) {
					return false;
				}
				
				// 3. insert file log then
				
				VideoLogVO videoLogVO = new VideoLogVO();
				videoLogVO.setVideoid(videoVO.getVideoid());
				videoLogVO.setVideooptid(FileOperations.EDIT.ordinal());
				videoLogVO.setChangedesc(prepareChangeDesc(videoVO, orgVideoVO, userVO, FileOperations.EDIT));
				videoLogVO.setUserid(userVO.getUserid());
				videoLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!videoLogDAO.insert(videoLogVO)) {
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
				
				VideoLogVO videoLogVO = new VideoLogVO();
				videoLogVO.setVideoid(videoVO.getVideoid());
				videoLogVO.setVideooptid(FileOperations.DELETE.ordinal());
				videoLogVO.setChangedesc(prepareChangeDesc(videoVO, userVO, FileOperations.DELETE));
				videoLogVO.setUserid(userVO.getUserid());
				videoLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!videoLogDAO.insert(videoLogVO)) {
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
		Integer fileID = newVideoVO.getVideoid();
		
		
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

		String fileName = videoVO.getViedoname();
		fileName = fileName == null || fileName.isEmpty() ? "" : fileName;
		descSingleAdd(desc, "视频名称", fileName);

		String fileLabel = videoVO.getVideolabel();
		fileLabel = fileLabel == null || fileLabel.isEmpty() ? "" : fileLabel;
		descSingleAdd(desc, "视频标签", fileLabel);
		
		String fileDesc = videoVO.getVideodesc();
		fileDesc = fileDesc == null || fileDesc.isEmpty() ? "" : fileDesc;
		descSingleAdd(desc, "视频描述", fileDesc);
		
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
		if (origVideoVO.getVideoid() != newVideoVO.getVideoid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// file name change
		if (!origVideoVO.getViedoname().trim().equalsIgnoreCase(newVideoVO.getViedoname().trim())) {
			descSingleEdit(desc, "视频名称", origVideoVO.getViedoname(), newVideoVO.getViedoname());
		}

		// file label change
		String orgFileLabel = origVideoVO.getVideolabel() == null ? "" : origVideoVO.getVideolabel().trim();
		String newFileLabel = newVideoVO.getVideolabel() == null ? "" : newVideoVO.getVideolabel().trim();
		
		if (!orgFileLabel.trim().equalsIgnoreCase(newFileLabel.trim())) {
			descSingleEdit(desc, "视频标签", orgFileLabel, newFileLabel);
		}
		
		// file description change
		String orgFileDesc = origVideoVO.getVideodesc() == null ? "" : origVideoVO.getVideodesc().trim();
		String newFileDesc = newVideoVO.getVideodesc() == null ? "" : newVideoVO.getVideodesc().trim();
		
		if (!orgFileDesc.equalsIgnoreCase(newFileDesc)) {
			descSingleEdit(desc, "视频描述", orgFileDesc, newFileDesc);
		}
		
		// file upload change
		if (!origVideoVO.getLocation().equalsIgnoreCase(newVideoVO.getLocation())) {
			desc.append("视频被重新上传;");
		}

    String orgImgLoc = origVideoVO.getImglocation() == null ? "" : origVideoVO.getImglocation().trim();
    String newImgLoc = newVideoVO.getImglocation() == null ? "" : newVideoVO.getImglocation().trim();

    if (!orgImgLoc.equalsIgnoreCase(newImgLoc)) {
      desc.append("缩略图被重新上传;");
    }
		
		return desc.toString();
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
