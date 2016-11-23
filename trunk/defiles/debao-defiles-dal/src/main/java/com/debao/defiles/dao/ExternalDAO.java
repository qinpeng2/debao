package com.debao.defiles.dao;

import com.debao.defiles.vo.ExternalVO;
import com.debao.defiles.vo.query.ExternalQueryVO;

import java.util.List;

public interface ExternalDAO {

  boolean insert(ExternalVO externalVO);

  Integer insertedID();

  boolean update(ExternalVO externalVO);

  boolean delete(Integer id);

  List<ExternalVO> findAll();

  ExternalVO findByID(Integer id);

  List<ExternalVO> find(ExternalQueryVO filter);

  Integer totalFind(ExternalQueryVO filter);

  List<ExternalVO> fuzzyFind(ExternalQueryVO filter);

  Integer totalFuzzyFind(ExternalQueryVO filter);
}
