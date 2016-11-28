package com.debao.defiles.dao.mapper;

import com.debao.defiles.vo.FeedbackLogVO;

public interface FeedbackLogVOMapper {
    int deleteByPrimaryKey(Integer feedbacklogid);

    int insert(FeedbackLogVO record);

    int insertSelective(FeedbackLogVO record);

    FeedbackLogVO selectByPrimaryKey(Integer feedbacklogid);

    int updateByPrimaryKeySelective(FeedbackLogVO record);

    int updateByPrimaryKey(FeedbackLogVO record);
}