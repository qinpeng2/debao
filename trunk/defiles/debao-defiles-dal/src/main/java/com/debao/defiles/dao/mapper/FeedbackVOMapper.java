package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.FeedbackVO;

public interface FeedbackVOMapper {
    int deleteByPrimaryKey(Integer fileid);

    int insert(FeedbackVO record);

    int insertSelective(FeedbackVO record);

    FeedbackVO selectByPrimaryKey(Integer fileid);

    int updateByPrimaryKeySelective(FeedbackVO record);

    int updateByPrimaryKey(FeedbackVO record);
}