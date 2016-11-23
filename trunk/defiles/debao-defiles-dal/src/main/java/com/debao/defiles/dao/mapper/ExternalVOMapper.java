package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.ExternalVO;

public interface ExternalVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(ExternalVO record);

    int insertSelective(ExternalVO record);

    ExternalVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(ExternalVO record);

    int updateByPrimaryKey(ExternalVO record);
}