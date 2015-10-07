package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.DriftLogDAO;
import com.debao.defiles.dao.mapper.DriftLogVOMapper;
import com.debao.defiles.vo.DriftLogVO;
import com.debao.defiles.vo.query.DriftLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DriftLogDAOImpl implements DriftLogDAO {
	
	@Autowired
	private DriftLogVOMapper driftLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(DriftLogVO driftLogVO) {
		return 1 == driftLogVOMapper.insert(driftLogVO);
	}

	@Override
	public boolean update(DriftLogVO driftLogVO) {
		return 1 == driftLogVOMapper.updateByPrimaryKey(driftLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == driftLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public DriftLogVO findByID(Integer id) {
		return driftLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<DriftLogVO> findAll() {
		return null;
	}

	@Override
	public List<DriftLogVO> find(DriftLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(DriftLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public DriftLogVOMapper getDriftLogVOMapper() {
		return driftLogVOMapper;
	}

	public void setDriftLogVOMapper(DriftLogVOMapper driftLogVOMapper) {
		this.driftLogVOMapper = driftLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
