package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.DriftDAO;
import com.debao.defiles.dao.mapper.DriftVOMapper;
import com.debao.defiles.vo.DriftVO;
import com.debao.defiles.vo.query.DriftQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DriftDAOImpl implements DriftDAO {
	
	@Autowired
	private DriftVOMapper capaVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(DriftVO driftVO) {
		return 1 == capaVOMapper.insert(driftVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.DriftVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(DriftVO driftVO) {
		return 1 == capaVOMapper.updateByPrimaryKey(driftVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.DriftVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<DriftVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.DriftVOMapper.selectByFilter", new DriftVO());
	}
	
	@Override
	public DriftVO findByID(Integer id) {
		return capaVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<DriftVO> find(DriftQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.DriftVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(DriftQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.DriftVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<DriftVO> fuzzyFind(DriftQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.DriftVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(DriftQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.DriftVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public DriftVOMapper getDriftVOMapper() {
		return capaVOMapper;
	}


	public void setDriftVOMapper(DriftVOMapper capaVOMapper) {
		this.capaVOMapper = capaVOMapper;
	}

}
