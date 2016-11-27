package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.AuditLogDAO;
import com.debao.defiles.dao.mapper.AuditLogVOMapper;
import com.debao.defiles.vo.AuditLogVO;
import com.debao.defiles.vo.query.AuditLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AuditLogDAOImpl implements AuditLogDAO {
	
	@Autowired
	private AuditLogVOMapper auditLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(AuditLogVO auditLogVO) {
		return 1 == auditLogVOMapper.insert(auditLogVO);
	}

	@Override
	public boolean update(AuditLogVO auditLogVO) {
		return 1 == auditLogVOMapper.updateByPrimaryKey(auditLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == auditLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public AuditLogVO findByID(Integer id) {
		return auditLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<AuditLogVO> findAll() {
		return null;
	}

	@Override
	public List<AuditLogVO> find(AuditLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(AuditLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public AuditLogVOMapper getAuditLogVOMapper() {
		return auditLogVOMapper;
	}

	public void setAuditLogVOMapper(AuditLogVOMapper auditLogVOMapper) {
		this.auditLogVOMapper = auditLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
