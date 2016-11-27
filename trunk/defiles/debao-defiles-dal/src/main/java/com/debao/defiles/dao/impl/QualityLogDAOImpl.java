package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.QualityLogDAO;
import com.debao.defiles.dao.mapper.QualityLogVOMapper;
import com.debao.defiles.vo.QualityLogVO;
import com.debao.defiles.vo.query.QualityLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class QualityLogDAOImpl implements QualityLogDAO {
	
	@Autowired
	private QualityLogVOMapper qualityLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(QualityLogVO qualityLogVO) {
		return 1 == qualityLogVOMapper.insert(qualityLogVO);
	}

	@Override
	public boolean update(QualityLogVO qualityLogVO) {
		return 1 == qualityLogVOMapper.updateByPrimaryKey(qualityLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == qualityLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public QualityLogVO findByID(Integer id) {
		return qualityLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<QualityLogVO> findAll() {
		return null;
	}

	@Override
	public List<QualityLogVO> find(QualityLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(QualityLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public QualityLogVOMapper getQualityLogVOMapper() {
		return qualityLogVOMapper;
	}

	public void setQualityLogVOMapper(QualityLogVOMapper qualityLogVOMapper) {
		this.qualityLogVOMapper = qualityLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
