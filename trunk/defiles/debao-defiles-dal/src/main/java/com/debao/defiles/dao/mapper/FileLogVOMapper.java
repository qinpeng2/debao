package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.FileLogVO;

public interface FileLogVOMapper {
    int deleteByPrimaryKey(Integer filelogid);

    int insert(FileLogVO record);

    int insertSelective(FileLogVO record);

    FileLogVO selectByPrimaryKey(Integer filelogid);

    int updateByPrimaryKeySelective(FileLogVO record);

    int updateByPrimaryKey(FileLogVO record);
}