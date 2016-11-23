package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.InternalDAO;
import com.debao.defiles.dao.mapper.InternalVOMapper;
import com.debao.defiles.vo.InternalVO;
import com.debao.defiles.vo.query.InternalQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InternalDAOImpl implements InternalDAO {
	
	@Autowired
	private InternalVOMapper internalVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(InternalVO internalVO) {
		return 1 == internalVOMapper.insert(internalVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.InternalVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(InternalVO internalVO) {
		return 1 == internalVOMapper.updateByPrimaryKey(internalVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.InternalVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<InternalVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.InternalVOMapper.selectByFilter", new InternalVO());
	}
	
	@Override
	public InternalVO findByID(Integer id) {
		return internalVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<InternalVO> find(InternalQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.InternalVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(InternalQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.InternalVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<InternalVO> fuzzyFind(InternalQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.InternalVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(InternalQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.InternalVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public InternalVOMapper getInternalVOMapper() {
		return internalVOMapper;
	}


	public void setInternalVOMapper(InternalVOMapper capaVOMapper) {
		this.internalVOMapper = capaVOMapper;
	}

}
