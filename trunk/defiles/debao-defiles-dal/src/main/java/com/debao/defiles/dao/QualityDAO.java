package com.debao.defiles.dao;

import com.debao.defiles.vo.QualityVO;
import com.debao.defiles.vo.query.QualityQueryVO;

import java.util.List;

public interface QualityDAO {

  boolean insert(QualityVO qualityVO);

  Integer insertedID();

  boolean update(QualityVO qualityVO);

  boolean delete(Integer id);

  List<QualityVO> findAll();

  QualityVO findByID(Integer id);

  List<QualityVO> find(QualityQueryVO filter);

  Integer totalFind(QualityQueryVO filter);

  List<QualityVO> fuzzyFind(QualityQueryVO filter);

  Integer totalFuzzyFind(QualityQueryVO filter);
}
