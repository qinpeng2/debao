package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.InternalLogDAO;
import com.debao.defiles.dao.mapper.InternalLogVOMapper;
import com.debao.defiles.vo.InternalLogVO;
import com.debao.defiles.vo.query.InternalLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class InternalLogDAOImpl implements InternalLogDAO {
	
	@Autowired
	private InternalLogVOMapper internalLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(InternalLogVO internalLogVO) {
		return 1 == internalLogVOMapper.insert(internalLogVO);
	}

	@Override
	public boolean update(InternalLogVO internalLogVO) {
		return 1 == internalLogVOMapper.updateByPrimaryKey(internalLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == internalLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public InternalLogVO findByID(Integer id) {
		return internalLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<InternalLogVO> findAll() {
		return null;
	}

	@Override
	public List<InternalLogVO> find(InternalLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(InternalLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public InternalLogVOMapper getInternalLogVOMapper() {
		return internalLogVOMapper;
	}

	public void setInternalLogVOMapper(InternalLogVOMapper internalLogVOMapper) {
		this.internalLogVOMapper = internalLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
