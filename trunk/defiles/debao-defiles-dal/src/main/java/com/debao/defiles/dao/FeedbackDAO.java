package com.debao.defiles.dao;

import com.debao.defiles.vo.FeedbackVO;
import com.debao.defiles.vo.query.FeedbackQueryVO;

import java.util.List;

public interface FeedbackDAO {

  boolean insert(FeedbackVO feedbackVO);

  Integer insertedID();

  boolean update(FeedbackVO feedbackVO);

  boolean delete(Integer id);

  List<FeedbackVO> findAll();

  FeedbackVO findByID(Integer id);

  List<FeedbackVO> find(FeedbackQueryVO filter);

  Integer totalFind(FeedbackQueryVO filter);

  List<FeedbackVO> fuzzyFind(FeedbackQueryVO filter);

  Integer totalFuzzyFind(FeedbackQueryVO filter);
}
