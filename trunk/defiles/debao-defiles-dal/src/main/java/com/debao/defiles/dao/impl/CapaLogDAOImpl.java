package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.CapaLogDAO;
import com.debao.defiles.dao.mapper.CapaLogVOMapper;
import com.debao.defiles.vo.CapaLogVO;
import com.debao.defiles.vo.query.CapaLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CapaLogDAOImpl implements CapaLogDAO {
	
	@Autowired
	private CapaLogVOMapper capaLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(CapaLogVO capaLogVO) {
		return 1 == capaLogVOMapper.insert(capaLogVO);
	}

	@Override
	public boolean update(CapaLogVO capaLogVO) {
		return 1 == capaLogVOMapper.updateByPrimaryKey(capaLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == capaLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public CapaLogVO findByID(Integer id) {
		return capaLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<CapaLogVO> findAll() {
		return null;
	}

	@Override
	public List<CapaLogVO> find(CapaLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(CapaLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public CapaLogVOMapper getCapaLogVOMapper() {
		return capaLogVOMapper;
	}

	public void setCapaLogVOMapper(CapaLogVOMapper capaLogVOMapper) {
		this.capaLogVOMapper = capaLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
