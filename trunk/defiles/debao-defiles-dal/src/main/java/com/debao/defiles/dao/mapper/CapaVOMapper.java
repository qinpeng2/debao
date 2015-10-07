package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.CapaVO;

public interface CapaVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(CapaVO record);

    int insertSelective(CapaVO record);

    CapaVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(CapaVO record);

    int updateByPrimaryKey(CapaVO record);
}