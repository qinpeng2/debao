package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.VideoLogVO;

public interface VideoLogVOMapper {
    int deleteByPrimaryKey(Integer videologid);

    int insert(VideoLogVO record);

    int insertSelective(VideoLogVO record);

    VideoLogVO selectByPrimaryKey(Integer videologid);

    int updateByPrimaryKeySelective(VideoLogVO record);

    int updateByPrimaryKey(VideoLogVO record);
}