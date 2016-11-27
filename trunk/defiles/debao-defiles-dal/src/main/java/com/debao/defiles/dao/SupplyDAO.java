package com.debao.defiles.dao;

import com.debao.defiles.vo.SupplyVO;
import com.debao.defiles.vo.query.SupplyQueryVO;

import java.util.List;

public interface SupplyDAO {

  boolean insert(SupplyVO supplyVO);

  Integer insertedID();

  boolean update(SupplyVO supplyVO);

  boolean delete(Integer id);

  List<SupplyVO> findAll();

  SupplyVO findByID(Integer id);

  List<SupplyVO> find(SupplyQueryVO filter);

  Integer totalFind(SupplyQueryVO filter);

  List<SupplyVO> fuzzyFind(SupplyQueryVO filter);

  Integer totalFuzzyFind(SupplyQueryVO filter);
}
