package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.AuditDAO;
import com.debao.defiles.dao.mapper.AuditVOMapper;
import com.debao.defiles.vo.AuditVO;
import com.debao.defiles.vo.query.AuditQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuditDAOImpl implements AuditDAO {
	
	@Autowired
	private AuditVOMapper auditVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(AuditVO auditVO) {
		return 1 == auditVOMapper.insert(auditVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.AuditVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(AuditVO auditVO) {
		return 1 == auditVOMapper.updateByPrimaryKey(auditVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.AuditVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<AuditVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.AuditVOMapper.selectByFilter", new AuditVO());
	}
	
	@Override
	public AuditVO findByID(Integer id) {
		return auditVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<AuditVO> find(AuditQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.AuditVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(AuditQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.AuditVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<AuditVO> fuzzyFind(AuditQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.AuditVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(AuditQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.AuditVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public AuditVOMapper getAuditVOMapper() {
		return auditVOMapper;
	}


	public void setAuditVOMapper(AuditVOMapper auditVOMapper) {
		this.auditVOMapper = auditVOMapper;
	}

}
