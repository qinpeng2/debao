package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.QualityDAO;
import com.debao.defiles.dao.mapper.QualityVOMapper;
import com.debao.defiles.vo.QualityVO;
import com.debao.defiles.vo.query.QualityQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QualityDAOImpl implements QualityDAO {
	
	@Autowired
	private QualityVOMapper qualityVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(QualityVO qualityVO) {
		return 1 == qualityVOMapper.insert(qualityVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.QualityVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(QualityVO qualityVO) {
		return 1 == qualityVOMapper.updateByPrimaryKey(qualityVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.QualityVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<QualityVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.QualityVOMapper.selectByFilter", new QualityVO());
	}
	
	@Override
	public QualityVO findByID(Integer id) {
		return qualityVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<QualityVO> find(QualityQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.QualityVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(QualityQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.QualityVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<QualityVO> fuzzyFind(QualityQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.QualityVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(QualityQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.QualityVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public QualityVOMapper getQualityVOMapper() {
		return qualityVOMapper;
	}


	public void setQualityVOMapper(QualityVOMapper capaVOMapper) {
		this.qualityVOMapper = capaVOMapper;
	}

}
