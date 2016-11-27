package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.SupplyDAO;
import com.debao.defiles.dao.mapper.SupplyVOMapper;
import com.debao.defiles.vo.SupplyVO;
import com.debao.defiles.vo.query.SupplyQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SupplyDAOImpl implements SupplyDAO {
	
	@Autowired
	private SupplyVOMapper supplyVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(SupplyVO supplyVO) {
		return 1 == supplyVOMapper.insert(supplyVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.SupplyVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(SupplyVO supplyVO) {
		return 1 == supplyVOMapper.updateByPrimaryKey(supplyVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.SupplyVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<SupplyVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.SupplyVOMapper.selectByFilter", new SupplyVO());
	}
	
	@Override
	public SupplyVO findByID(Integer id) {
		return supplyVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<SupplyVO> find(SupplyQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.SupplyVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(SupplyQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.SupplyVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<SupplyVO> fuzzyFind(SupplyQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.SupplyVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(SupplyQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.SupplyVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public SupplyVOMapper getSupplyVOMapper() {
		return supplyVOMapper;
	}


	public void setSupplyVOMapper(SupplyVOMapper capaVOMapper) {
		this.supplyVOMapper = capaVOMapper;
	}

}
