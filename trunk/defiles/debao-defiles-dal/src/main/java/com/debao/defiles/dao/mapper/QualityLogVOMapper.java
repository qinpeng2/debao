package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.QualityLogVO;

public interface QualityLogVOMapper {
    int deleteByPrimaryKey(Integer qualitylogid);

    int insert(QualityLogVO record);

    int insertSelective(QualityLogVO record);

    QualityLogVO selectByPrimaryKey(Integer qualitylogid);

    int updateByPrimaryKeySelective(QualityLogVO record);

    int updateByPrimaryKey(QualityLogVO record);
}