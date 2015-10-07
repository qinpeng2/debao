package com.debao.defiles.dao;

import com.debao.defiles.vo.CapaLogVO;
import com.debao.defiles.vo.query.CapaLogQueryVO;

import java.util.List;

public interface CapaLogDAO {
	
	boolean insert(CapaLogVO capaLogVO);

	boolean update(CapaLogVO capaLogVO);

	boolean delete(Integer id);

	List<CapaLogVO> findAll();

	CapaLogVO findByID(Integer id);
	
	List<CapaLogVO> find(CapaLogQueryVO filter);
	
	Integer totalFind(CapaLogQueryVO filter);
	
}
