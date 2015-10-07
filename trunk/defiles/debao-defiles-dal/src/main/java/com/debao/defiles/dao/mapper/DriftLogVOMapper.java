package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.DriftLogVO;

public interface DriftLogVOMapper {
    int deleteByPrimaryKey(Integer driftlogid);

    int insert(DriftLogVO record);

    int insertSelective(DriftLogVO record);

    DriftLogVO selectByPrimaryKey(Integer driftlogid);

    int updateByPrimaryKeySelective(DriftLogVO record);

    int updateByPrimaryKey(DriftLogVO record);
}