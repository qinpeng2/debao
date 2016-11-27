package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.QualityVO;

public interface QualityVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(QualityVO record);

    int insertSelective(QualityVO record);

    QualityVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(QualityVO record);

    int updateByPrimaryKey(QualityVO record);
}