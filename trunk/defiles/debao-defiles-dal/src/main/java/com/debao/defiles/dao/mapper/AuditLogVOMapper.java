package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.AuditLogVO;

public interface AuditLogVOMapper {
    int deleteByPrimaryKey(Integer auditlogid);

    int insert(AuditLogVO record);

    int insertSelective(AuditLogVO record);

    AuditLogVO selectByPrimaryKey(Integer auditlogid);

    int updateByPrimaryKeySelective(AuditLogVO record);

    int updateByPrimaryKey(AuditLogVO record);
}