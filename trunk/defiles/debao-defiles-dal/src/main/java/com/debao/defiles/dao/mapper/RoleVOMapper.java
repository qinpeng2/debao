package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.RoleVO;

public interface RoleVOMapper {
    int deleteByPrimaryKey(Integer roleid);

    int insert(RoleVO record);

    int insertSelective(RoleVO record);

    RoleVO selectByPrimaryKey(Integer roleid);

    int updateByPrimaryKeySelective(RoleVO record);

    int updateByPrimaryKey(RoleVO record);
}