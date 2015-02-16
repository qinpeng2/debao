package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.UserVO;

public interface UserVOMapper {
    int deleteByPrimaryKey(Integer userid);

    int insert(UserVO record);

    int insertSelective(UserVO record);

    UserVO selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(UserVO record);

    int updateByPrimaryKey(UserVO record);
}