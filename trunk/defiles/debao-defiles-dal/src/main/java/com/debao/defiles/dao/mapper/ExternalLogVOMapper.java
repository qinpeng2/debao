package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.ExternalLogVO;

public interface ExternalLogVOMapper {
    int deleteByPrimaryKey(Integer externallogid);

    int insert(ExternalLogVO record);

    int insertSelective(ExternalLogVO record);

    ExternalLogVO selectByPrimaryKey(Integer externallogid);

    int updateByPrimaryKeySelective(ExternalLogVO record);

    int updateByPrimaryKey(ExternalLogVO record);
}