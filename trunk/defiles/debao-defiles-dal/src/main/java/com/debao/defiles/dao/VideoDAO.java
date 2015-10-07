package com.debao.defiles.dao;

import com.debao.defiles.vo.VideoVO;
import com.debao.defiles.vo.query.VideoQueryVO;

import java.util.List;

public interface VideoDAO {

  boolean insert(VideoVO videoVO);

  Integer insertedID();

  boolean update(VideoVO videoVO);

  boolean delete(Integer id);

  List<VideoVO> findAll();

  VideoVO findByID(Integer id);

  List<VideoVO> find(VideoQueryVO filter);

  Integer totalFind(VideoQueryVO filter);

  List<VideoVO> fuzzyFind(VideoQueryVO filter);

  Integer totalFuzzyFind(VideoQueryVO filter);
}
