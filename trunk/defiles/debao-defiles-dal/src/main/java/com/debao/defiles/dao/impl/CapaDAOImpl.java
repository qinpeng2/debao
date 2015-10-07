package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.CapaDAO;
import com.debao.defiles.dao.mapper.CapaVOMapper;
import com.debao.defiles.vo.CapaVO;
import com.debao.defiles.vo.query.CapaQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CapaDAOImpl implements CapaDAO {
	
	@Autowired
	private CapaVOMapper capaVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(CapaVO capaVO) {
		return 1 == capaVOMapper.insert(capaVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.CapaVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(CapaVO capaVO) {
		return 1 == capaVOMapper.updateByPrimaryKey(capaVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.CapaVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<CapaVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.CapaVOMapper.selectByFilter", new CapaVO());
	}
	
	@Override
	public CapaVO findByID(Integer id) {
		return capaVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<CapaVO> find(CapaQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.CapaVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(CapaQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.CapaVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<CapaVO> fuzzyFind(CapaQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.CapaVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(CapaQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.CapaVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public CapaVOMapper getCapaVOMapper() {
		return capaVOMapper;
	}


	public void setCapaVOMapper(CapaVOMapper capaVOMapper) {
		this.capaVOMapper = capaVOMapper;
	}

}
