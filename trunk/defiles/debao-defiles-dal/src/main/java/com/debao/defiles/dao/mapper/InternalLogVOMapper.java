package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.InternalLogVO;

public interface InternalLogVOMapper {
    int deleteByPrimaryKey(Integer internallogid);

    int insert(InternalLogVO record);

    int insertSelective(InternalLogVO record);

    InternalLogVO selectByPrimaryKey(Integer internallogid);

    int updateByPrimaryKeySelective(InternalLogVO record);

    int updateByPrimaryKey(InternalLogVO record);
}