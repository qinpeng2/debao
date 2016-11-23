package com.debao.defiles.dao;

import com.debao.defiles.vo.InternalVO;
import com.debao.defiles.vo.query.InternalQueryVO;

import java.util.List;

public interface InternalDAO {

  boolean insert(InternalVO internalVO);

  Integer insertedID();

  boolean update(InternalVO internalVO);

  boolean delete(Integer id);

  List<InternalVO> findAll();

  InternalVO findByID(Integer id);

  List<InternalVO> find(InternalQueryVO filter);

  Integer totalFind(InternalQueryVO filter);

  List<InternalVO> fuzzyFind(InternalQueryVO filter);

  Integer totalFuzzyFind(InternalQueryVO filter);
}
