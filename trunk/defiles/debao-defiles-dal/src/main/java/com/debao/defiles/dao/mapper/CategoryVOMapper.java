package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.CategoryVO;

public interface CategoryVOMapper {
    int deleteByPrimaryKey(Integer categoryid);

    int insert(CategoryVO record);

    int insertSelective(CategoryVO record);

    CategoryVO selectByPrimaryKey(Integer categoryid);

    int updateByPrimaryKeySelective(CategoryVO record);

    int updateByPrimaryKey(CategoryVO record);
}