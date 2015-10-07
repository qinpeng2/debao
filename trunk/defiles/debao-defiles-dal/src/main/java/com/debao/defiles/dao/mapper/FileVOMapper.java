package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.FileVO;

public interface FileVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(FileVO record);

    int insertSelective(FileVO record);

    FileVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(FileVO record);

    int updateByPrimaryKey(FileVO record);
}