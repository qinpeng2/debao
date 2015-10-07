package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.CapaLogVO;

public interface CapaLogVOMapper {
    int deleteByPrimaryKey(Integer capalogid);

    int insert(CapaLogVO record);

    int insertSelective(CapaLogVO record);

    CapaLogVO selectByPrimaryKey(Integer capalogid);

    int updateByPrimaryKeySelective(CapaLogVO record);

    int updateByPrimaryKey(CapaLogVO record);
}