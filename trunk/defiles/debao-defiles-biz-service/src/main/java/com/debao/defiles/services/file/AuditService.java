package com.debao.defiles.services.file;

import com.debao.defiles.vo.AuditVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.AuditQueryVO;

import java.util.List;

public interface AuditService {
	
	AuditVO findByID(Integer fileid);

	boolean insert(AuditVO auditVO, UserVO userVO);
	
	boolean update(AuditVO auditVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<AuditVO> fuzzyFind(AuditQueryVO filter);

	int totalFuzzyFind(AuditQueryVO filter);
	
	List<AuditVO> find(AuditQueryVO filter);

	int totalFind(AuditQueryVO filter);
	
}
