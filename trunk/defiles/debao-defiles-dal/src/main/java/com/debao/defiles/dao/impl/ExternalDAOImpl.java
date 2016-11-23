package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.ExternalDAO;
import com.debao.defiles.dao.mapper.ExternalVOMapper;
import com.debao.defiles.vo.ExternalVO;
import com.debao.defiles.vo.query.ExternalQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ExternalDAOImpl implements ExternalDAO {
	
	@Autowired
	private ExternalVOMapper externalVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(ExternalVO externalVO) {
		return 1 == externalVOMapper.insert(externalVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.ExternalVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(ExternalVO externalVO) {
		return 1 == externalVOMapper.updateByPrimaryKey(externalVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.ExternalVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<ExternalVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.ExternalVOMapper.selectByFilter", new ExternalVO());
	}
	
	@Override
	public ExternalVO findByID(Integer id) {
		return externalVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<ExternalVO> find(ExternalQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.ExternalVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(ExternalQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.ExternalVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<ExternalVO> fuzzyFind(ExternalQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.ExternalVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(ExternalQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.ExternalVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public ExternalVOMapper getExternalVOMapper() {
		return externalVOMapper;
	}


	public void setExternalVOMapper(ExternalVOMapper capaVOMapper) {
		this.externalVOMapper = capaVOMapper;
	}

}
