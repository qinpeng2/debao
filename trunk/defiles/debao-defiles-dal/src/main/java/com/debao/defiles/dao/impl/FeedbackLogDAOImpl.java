package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.FeedbackLogDAO;
import com.debao.defiles.dao.mapper.FeedbackLogVOMapper;
import com.debao.defiles.vo.FeedbackLogVO;
import com.debao.defiles.vo.query.FeedbackLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FeedbackLogDAOImpl implements FeedbackLogDAO {
	
	@Autowired
	private FeedbackLogVOMapper feedbackLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(FeedbackLogVO feedbackLogVO) {
		return 1 == feedbackLogVOMapper.insert(feedbackLogVO);
	}

	@Override
	public boolean update(FeedbackLogVO feedbackLogVO) {
		return 1 == feedbackLogVOMapper.updateByPrimaryKey(feedbackLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == feedbackLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public FeedbackLogVO findByID(Integer id) {
		return feedbackLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<FeedbackLogVO> findAll() {
		return null;
	}

	@Override
	public List<FeedbackLogVO> find(FeedbackLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(FeedbackLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public FeedbackLogVOMapper getFeedbackLogVOMapper() {
		return feedbackLogVOMapper;
	}

	public void setFeedbackLogVOMapper(FeedbackLogVOMapper feedbackLogVOMapper) {
		this.feedbackLogVOMapper = feedbackLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
