package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.InternalVO;

public interface InternalVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(InternalVO record);

    int insertSelective(InternalVO record);

    InternalVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(InternalVO record);

    int updateByPrimaryKey(InternalVO record);
}