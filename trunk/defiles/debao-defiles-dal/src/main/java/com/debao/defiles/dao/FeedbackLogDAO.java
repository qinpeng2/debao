package com.debao.defiles.dao;

import com.debao.defiles.vo.FeedbackLogVO;
import com.debao.defiles.vo.query.FeedbackLogQueryVO;

import java.util.List;

public interface FeedbackLogDAO {
	
	boolean insert(FeedbackLogVO feedbackLogVO);

	boolean update(FeedbackLogVO feedbackLogVO);

	boolean delete(Integer id);

	List<FeedbackLogVO> findAll();

	FeedbackLogVO findByID(Integer id);
	
	List<FeedbackLogVO> find(FeedbackLogQueryVO filter);
	
	Integer totalFind(FeedbackLogQueryVO filter);
	
}
