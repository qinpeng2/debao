package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.VideoVO;

public interface VideoVOMapper {
    int deleteByPrimaryKey(Integer videoid);

    int insert(VideoVO record);

    int insertSelective(VideoVO record);

    VideoVO selectByPrimaryKey(Integer videoid);

    int updateByPrimaryKeySelective(VideoVO record);

    int updateByPrimaryKey(VideoVO record);
}