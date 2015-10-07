package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.FileLabelVO;

public interface FileLabelVOMapper {
    int deleteByPrimaryKey(Integer labelid);

    int insert(FileLabelVO record);

    int insertSelective(FileLabelVO record);

    FileLabelVO selectByPrimaryKey(Integer labelid);

    int updateByPrimaryKeySelective(FileLabelVO record);

    int updateByPrimaryKey(FileLabelVO record);
}