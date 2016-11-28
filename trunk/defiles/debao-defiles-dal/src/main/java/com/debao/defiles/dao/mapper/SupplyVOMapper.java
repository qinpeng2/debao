package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.SupplyVO;

public interface SupplyVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(SupplyVO record);

    int insertSelective(SupplyVO record);

    SupplyVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(SupplyVO record);

    int updateByPrimaryKey(SupplyVO record);
}