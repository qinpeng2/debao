package com.debao.defiles.dao;

import com.debao.defiles.vo.SupplyLogVO;
import com.debao.defiles.vo.query.SupplyLogQueryVO;

import java.util.List;

public interface SupplyLogDAO {
	
	boolean insert(SupplyLogVO supplyLogVO);

	boolean update(SupplyLogVO supplyLogVO);

	boolean delete(Integer id);

	List<SupplyLogVO> findAll();

	SupplyLogVO findByID(Integer id);
	
	List<SupplyLogVO> find(SupplyLogQueryVO filter);
	
	Integer totalFind(SupplyLogQueryVO filter);
	
}
