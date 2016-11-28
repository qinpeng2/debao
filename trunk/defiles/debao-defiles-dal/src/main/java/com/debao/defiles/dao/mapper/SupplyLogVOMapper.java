package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.SupplyLogVO;

public interface SupplyLogVOMapper {
    int deleteByPrimaryKey(Integer supplylogid);

    int insert(SupplyLogVO record);

    int insertSelective(SupplyLogVO record);

    SupplyLogVO selectByPrimaryKey(Integer supplylogid);

    int updateByPrimaryKeySelective(SupplyLogVO record);

    int updateByPrimaryKey(SupplyLogVO record);
}