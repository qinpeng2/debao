package com.debao.defiles.services.file.impl;

import com.debao.defiles.common.util.StringUtil;
import com.debao.defiles.constant.FileOperations;
import com.debao.defiles.dao.FeedbackDAO;
import com.debao.defiles.dao.FeedbackLogDAO;
import com.debao.defiles.services.file.FeedbackService;
import com.debao.defiles.vo.FeedbackLogVO;
import com.debao.defiles.vo.FeedbackVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.FeedbackQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Calendar;
import java.util.List;

public class FeedbackServiceImpl extends CommonFileService implements FeedbackService {
	
	@Autowired
	private TransactionTemplate transactionTemplate;
	
	@Autowired
	private FeedbackDAO feedbackDAO;
	
	@Autowired
	private FeedbackLogDAO feedbackLogDAO;

	@Override
	public FeedbackVO findByID(Integer feedbackid) {
		return feedbackDAO.findByID(feedbackid);
	}

	@Override
	public boolean insert(final FeedbackVO feedbackVO, final UserVO userVO) {
		Boolean result = transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {

				// insert feedback first
				if (!feedbackDAO.insert(feedbackVO)) {
					return false;
				}

				feedbackVO.setFileid(feedbackDAO.insertedID());
				
				// insert feedback log then
				
				FeedbackLogVO feedbackLogVO = new FeedbackLogVO();
				feedbackLogVO.setFileid(feedbackVO.getFileid());
				feedbackLogVO.setFileoptid(FileOperations.ADD.ordinal());
				feedbackLogVO.setChangedesc(prepareChangeDesc(feedbackVO, userVO, FileOperations.ADD));
				feedbackLogVO.setUserid(userVO.getUserid());
				feedbackLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!feedbackLogDAO.insert(feedbackLogVO)) {
					return false;
				}
				
				return true;
			}
			
		});
		return result;
	}
	
	@Override
	public boolean update(final FeedbackVO feedbackVO, final UserVO userVO) {
		
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				// 1. Find the original feedback first
				FeedbackVO orgFeedbackVO = feedbackDAO.findByID(feedbackVO.getFileid());

				// 2. update feedback then
				if (!feedbackDAO.update(feedbackVO)) {
					return false;
				}
				
				// 3. insert feedback log then
				
				FeedbackLogVO feedbackLogVO = new FeedbackLogVO();
				feedbackLogVO.setFileid(feedbackVO.getFileid());
				feedbackLogVO.setFileoptid(FileOperations.EDIT.ordinal());
				feedbackLogVO.setChangedesc(prepareChangeDesc(feedbackVO, orgFeedbackVO, userVO, FileOperations.EDIT));
				feedbackLogVO.setUserid(userVO.getUserid());
				feedbackLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				
				if (!feedbackLogDAO.insert(feedbackLogVO)) {
					return false;
				}
				
				return true;
				
			}
		});
		
	}
	
	@Override
	public boolean delete(final Integer feedbackid, final UserVO userVO) {
		return transactionTemplate.execute(new TransactionCallback<Boolean>() {

			@Override
			public Boolean doInTransaction(TransactionStatus status) {
				
				FeedbackVO feedbackVO = feedbackDAO.findByID(feedbackid);
				
				// 1. mark feedback as delete
				if (!feedbackDAO.delete(feedbackid)) {
					return false;
				}
				
				FeedbackLogVO feedbackLogVO = new FeedbackLogVO();
				feedbackLogVO.setFileid(feedbackVO.getFileid());
				feedbackLogVO.setFileoptid(FileOperations.DELETE.ordinal());
				feedbackLogVO.setChangedesc(prepareChangeDesc(feedbackVO, userVO, FileOperations.DELETE));
				feedbackLogVO.setUserid(userVO.getUserid());
				feedbackLogVO.setDatestamp(Calendar.getInstance().getTime());
				
				// 2. record the log then
				if (!feedbackLogDAO.insert(feedbackLogVO)) {
					return false;
				}
				
				return true;
			}
		});
	}

	@Override
	public List<FeedbackVO> fuzzyFind(FeedbackQueryVO filter) {
		return feedbackDAO.fuzzyFind(filter);
	}

	@Override
	public int totalFuzzyFind(FeedbackQueryVO filter) {
		return feedbackDAO.totalFuzzyFind(filter);
	}

	@Override
	public List<FeedbackVO> find(FeedbackQueryVO filter) {
		return feedbackDAO.find(filter);
	}

	@Override
	public int totalFind(FeedbackQueryVO filter) {
		return feedbackDAO.totalFind(filter);
	}
	
	
	
	/******************************Utilities*******************************************/
	
	/**
	 * 获取文件日志描述
	 * 
	 * @param feedbackVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(FeedbackVO feedbackVO, UserVO userVO, FileOperations opt) {
		return prepareChangeDesc(feedbackVO, null, userVO, opt);
	}
	
	/**
	 * 获取文件日志描述 (多文件)
	 * 
	 * @param newFeedbackVO
	 * @param orgFeedbackVO
	 * @param userVO
	 * @param opt
	 * @return
	 */
	public String prepareChangeDesc(FeedbackVO newFeedbackVO, FeedbackVO orgFeedbackVO, UserVO userVO, FileOperations opt) {
		
		String str = opt.getDescription();
		
		String userName = userVO.getUsername();
		Integer feedbackID = newFeedbackVO.getFileid();
		
		
		if (opt == FileOperations.ADD) {
			// 新增文件日志描述
			return StringUtil.format(str, userName, feedbackID, descAdd(newFeedbackVO));
		} else if (opt == FileOperations.EDIT) {
			// 编辑文件日志描述
			String descEdit = descEdit(orgFeedbackVO, newFeedbackVO);
			if (descEdit == null || !descEdit.isEmpty()) {
				return StringUtil.format(str, userName, feedbackID, descEdit);
			}
		} else if (opt == FileOperations.DELETE) {
			// 删除文件日志描述
			return StringUtil.format(str, userName, feedbackID);
		} else if (opt == FileOperations.VIEW) {
			// 浏览文件日志描述
			return StringUtil.format(str, userName, feedbackID);
		}

		return null;
	}

	/**
	 * 新增文件日志描述
	 * 
	 * @param feedbackVO
	 * @return
	 */
	private String descAdd(FeedbackVO feedbackVO) {
		
		StringBuilder desc = new StringBuilder();

		String feedbackName = feedbackVO.getFilename();
		feedbackName = feedbackName == null || feedbackName.isEmpty() ? "" : feedbackName;
		descSingleAdd(desc, "文件名称", feedbackName);
		
		String feedbackNumber = feedbackVO.getFilenumber();
		feedbackNumber = feedbackNumber == null || feedbackNumber.isEmpty() ? "" : feedbackNumber;
		descSingleAdd(desc, "文件编号", feedbackNumber);

    String closed = feedbackVO.getClosed() ? "是" : "否";
    descSingleAdd(desc, "是否闭环", closed);
		
		String feedbackLabel = feedbackVO.getFilelabel();
		feedbackLabel = feedbackLabel == null || feedbackLabel.isEmpty() ? "" : feedbackLabel;
		descSingleAdd(desc, "文件标签", feedbackLabel);
		
		String feedbackDesc = feedbackVO.getFiledesc();
		feedbackDesc = feedbackDesc == null || feedbackDesc.isEmpty() ? "" : feedbackDesc;
		descSingleAdd(desc, "文件描述", feedbackDesc);
		
		return desc.toString();
	}
	
	/**
	 * 修改文件日志描述
	 * 
	 * @param origFeedbackVO
	 * @param newFeedbackVO
	 * @return
	 */
	private String descEdit(FeedbackVO origFeedbackVO, FeedbackVO newFeedbackVO) {

		// only compare feedbacks with the same ID
		if (origFeedbackVO.getFileid() != newFeedbackVO.getFileid()) {
			return "";
		}
		
		StringBuilder desc = new StringBuilder();

		// feedback name change
		if (!origFeedbackVO.getFilename().trim().equalsIgnoreCase(newFeedbackVO.getFilename().trim())) {
			descSingleEdit(desc, "文件名称", origFeedbackVO.getFilename(), newFeedbackVO.getFilename());
		}
		
		// feedback number change
		if (!origFeedbackVO.getFilenumber().trim().equalsIgnoreCase(newFeedbackVO.getFilenumber().trim())) {
			descSingleEdit(desc, "文件编号", origFeedbackVO.getFilenumber(), newFeedbackVO.getFilenumber());
		}

    if (origFeedbackVO.getClosed() != newFeedbackVO.getClosed()) {
      descSingleEdit(desc, "是否闭环", origFeedbackVO.getClosed(), newFeedbackVO.getClosed());
    }
		
		// feedback label change
		String orgFeedbackLabel = origFeedbackVO.getFilelabel() == null ? "" : origFeedbackVO.getFilelabel().trim();
		String newFeedbackLabel = newFeedbackVO.getFilelabel() == null ? "" : newFeedbackVO.getFilelabel().trim();
		
		if (!orgFeedbackLabel.trim().equalsIgnoreCase(newFeedbackLabel.trim())) {
			descSingleEdit(desc, "文件标签", orgFeedbackLabel, newFeedbackLabel);
		}
		
		// feedback description change
		String orgFeedbackDesc = origFeedbackVO.getFiledesc() == null ? "" : origFeedbackVO.getFiledesc().trim();
		String newFeedbackDesc = newFeedbackVO.getFiledesc() == null ? "" : newFeedbackVO.getFiledesc().trim();
		
		if (!orgFeedbackDesc.equalsIgnoreCase(newFeedbackDesc)) {
			descSingleEdit(desc, "文件描述", orgFeedbackDesc, newFeedbackDesc);
		}
		
		// feedback upload change
		if (!origFeedbackVO.getLocation().equalsIgnoreCase(newFeedbackVO.getLocation())) {
			desc.append("文件被重新上传;");
		}
		
		return desc.toString();
	}

	/******************************Getter & Setter*******************************************/

	public FeedbackDAO getFeedbackDAO() {
		return feedbackDAO;
	}

	public void setFeedbackDAO(FeedbackDAO feedbackDAO) {
		this.feedbackDAO = feedbackDAO;
	}

	public FeedbackLogDAO getFeedbackLogDAO() {
		return feedbackLogDAO;
	}

	public void setFeedbackLogDAO(FeedbackLogDAO feedbackLogDAO) {
		this.feedbackLogDAO = feedbackLogDAO;
	}

	public TransactionTemplate getTransactionTemplate() {
		return transactionTemplate;
	}

	public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
		this.transactionTemplate = transactionTemplate;
	}

}
