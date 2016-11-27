package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.FeedbackDAO;
import com.debao.defiles.dao.mapper.FeedbackVOMapper;
import com.debao.defiles.vo.FeedbackVO;
import com.debao.defiles.vo.query.FeedbackQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FeedbackDAOImpl implements FeedbackDAO {
	
	@Autowired
	private FeedbackVOMapper feedbackVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(FeedbackVO feedbackVO) {
		return 1 == feedbackVOMapper.insert(feedbackVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.FeedbackVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(FeedbackVO feedbackVO) {
		return 1 == feedbackVOMapper.updateByPrimaryKey(feedbackVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.FeedbackVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<FeedbackVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.FeedbackVOMapper.selectByFilter", new FeedbackVO());
	}
	
	@Override
	public FeedbackVO findByID(Integer id) {
		return feedbackVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<FeedbackVO> find(FeedbackQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.FeedbackVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(FeedbackQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.FeedbackVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<FeedbackVO> fuzzyFind(FeedbackQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.FeedbackVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(FeedbackQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.FeedbackVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public FeedbackVOMapper getFeedbackVOMapper() {
		return feedbackVOMapper;
	}


	public void setFeedbackVOMapper(FeedbackVOMapper capaVOMapper) {
		this.feedbackVOMapper = capaVOMapper;
	}

}
