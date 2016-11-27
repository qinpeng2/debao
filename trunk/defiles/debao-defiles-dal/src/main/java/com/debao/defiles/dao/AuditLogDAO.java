package com.debao.defiles.dao;

import com.debao.defiles.vo.AuditLogVO;
import com.debao.defiles.vo.query.AuditLogQueryVO;

import java.util.List;

public interface AuditLogDAO {
	
	boolean insert(AuditLogVO auditLogVO);

	boolean update(AuditLogVO auditLogVO);

	boolean delete(Integer id);

	List<AuditLogVO> findAll();

	AuditLogVO findByID(Integer id);
	
	List<AuditLogVO> find(AuditLogQueryVO filter);
	
	Integer totalFind(AuditLogQueryVO filter);
	
}
