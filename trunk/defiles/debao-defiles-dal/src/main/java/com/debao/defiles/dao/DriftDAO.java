package com.debao.defiles.dao;

import com.debao.defiles.vo.DriftVO;
import com.debao.defiles.vo.query.DriftQueryVO;

import java.util.List;

public interface DriftDAO {

  boolean insert(DriftVO driftVO);

  Integer insertedID();

  boolean update(DriftVO driftVO);

  boolean delete(Integer id);

  List<DriftVO> findAll();

  DriftVO findByID(Integer id);

  List<DriftVO> find(DriftQueryVO filter);

  Integer totalFind(DriftQueryVO filter);

  List<DriftVO> fuzzyFind(DriftQueryVO filter);

  Integer totalFuzzyFind(DriftQueryVO filter);
}
