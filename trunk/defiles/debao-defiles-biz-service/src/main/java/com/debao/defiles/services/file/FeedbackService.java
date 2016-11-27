package com.debao.defiles.services.file;

import com.debao.defiles.vo.FeedbackVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.FeedbackQueryVO;

import java.util.List;

public interface FeedbackService {
	
	FeedbackVO findByID(Integer fileid);

	boolean insert(FeedbackVO feedbackVO, UserVO userVO);
	
	boolean update(FeedbackVO feedbackVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<FeedbackVO> fuzzyFind(FeedbackQueryVO filter);

	int totalFuzzyFind(FeedbackQueryVO filter);
	
	List<FeedbackVO> find(FeedbackQueryVO filter);

	int totalFind(FeedbackQueryVO filter);
	
}
