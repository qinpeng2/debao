package com.debao.defiles.dao;

import com.debao.defiles.vo.CapaVO;
import com.debao.defiles.vo.query.CapaQueryVO;

import java.util.List;

public interface CapaDAO {
	
	boolean insert(CapaVO capaVO);
	
	Integer insertedID();

	boolean update(CapaVO capaVO);

	boolean delete(Integer id);

	List<CapaVO> findAll();

  CapaVO findByID(Integer id);
	
	List<CapaVO> find(CapaQueryVO filter);
	
	Integer totalFind(CapaQueryVO filter);
	
	List<CapaVO> fuzzyFind(CapaQueryVO filter);
	
	Integer totalFuzzyFind(CapaQueryVO filter);
}
