package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.ExternalLogDAO;
import com.debao.defiles.dao.mapper.ExternalLogVOMapper;
import com.debao.defiles.vo.ExternalLogVO;
import com.debao.defiles.vo.query.ExternalLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ExternalLogDAOImpl implements ExternalLogDAO {
	
	@Autowired
	private ExternalLogVOMapper externalLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(ExternalLogVO externalLogVO) {
		return 1 == externalLogVOMapper.insert(externalLogVO);
	}

	@Override
	public boolean update(ExternalLogVO externalLogVO) {
		return 1 == externalLogVOMapper.updateByPrimaryKey(externalLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == externalLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public ExternalLogVO findByID(Integer id) {
		return externalLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<ExternalLogVO> findAll() {
		return null;
	}

	@Override
	public List<ExternalLogVO> find(ExternalLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(ExternalLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public ExternalLogVOMapper getExternalLogVOMapper() {
		return externalLogVOMapper;
	}

	public void setExternalLogVOMapper(ExternalLogVOMapper externalLogVOMapper) {
		this.externalLogVOMapper = externalLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
