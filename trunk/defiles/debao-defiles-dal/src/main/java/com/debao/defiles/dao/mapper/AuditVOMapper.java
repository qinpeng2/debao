package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.AuditVO;

public interface AuditVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(AuditVO record);

    int insertSelective(AuditVO record);

    AuditVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(AuditVO record);

    int updateByPrimaryKey(AuditVO record);
}