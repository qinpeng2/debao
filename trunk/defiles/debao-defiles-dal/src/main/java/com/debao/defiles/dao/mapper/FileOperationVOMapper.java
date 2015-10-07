package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.FileOperationVO;

public interface FileOperationVOMapper {
    int deleteByPrimaryKey(Integer fileoptid);

    int insert(FileOperationVO record);

    int insertSelective(FileOperationVO record);

    FileOperationVO selectByPrimaryKey(Integer fileoptid);

    int updateByPrimaryKeySelective(FileOperationVO record);

    int updateByPrimaryKey(FileOperationVO record);
}