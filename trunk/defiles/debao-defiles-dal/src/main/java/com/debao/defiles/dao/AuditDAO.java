package com.debao.defiles.dao;

import com.debao.defiles.vo.AuditVO;
import com.debao.defiles.vo.query.AuditQueryVO;

import java.util.List;

public interface AuditDAO {
	
	boolean insert(AuditVO auditVO);
	
	Integer insertedID();

	boolean update(AuditVO auditVO);

	boolean delete(Integer id);

	List<AuditVO> findAll();

  AuditVO findByID(Integer id);
	
	List<AuditVO> find(AuditQueryVO filter);
	
	Integer totalFind(AuditQueryVO filter);
	
	List<AuditVO> fuzzyFind(AuditQueryVO filter);
	
	Integer totalFuzzyFind(AuditQueryVO filter);
}
