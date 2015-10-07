package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.DriftVO;

public interface DriftVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(DriftVO record);

    int insertSelective(DriftVO record);

    DriftVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(DriftVO record);

    int updateByPrimaryKey(DriftVO record);
}