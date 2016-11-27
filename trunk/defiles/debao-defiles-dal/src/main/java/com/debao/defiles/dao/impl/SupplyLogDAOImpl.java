package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.SupplyLogDAO;
import com.debao.defiles.dao.mapper.SupplyLogVOMapper;
import com.debao.defiles.vo.SupplyLogVO;
import com.debao.defiles.vo.query.SupplyLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SupplyLogDAOImpl implements SupplyLogDAO {
	
	@Autowired
	private SupplyLogVOMapper supplyLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(SupplyLogVO supplyLogVO) {
		return 1 == supplyLogVOMapper.insert(supplyLogVO);
	}

	@Override
	public boolean update(SupplyLogVO supplyLogVO) {
		return 1 == supplyLogVOMapper.updateByPrimaryKey(supplyLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == supplyLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public SupplyLogVO findByID(Integer id) {
		return supplyLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<SupplyLogVO> findAll() {
		return null;
	}

	@Override
	public List<SupplyLogVO> find(SupplyLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(SupplyLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public SupplyLogVOMapper getSupplyLogVOMapper() {
		return supplyLogVOMapper;
	}

	public void setSupplyLogVOMapper(SupplyLogVOMapper supplyLogVOMapper) {
		this.supplyLogVOMapper = supplyLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
