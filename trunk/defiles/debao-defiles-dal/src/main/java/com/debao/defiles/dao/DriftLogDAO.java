package com.debao.defiles.dao;

import com.debao.defiles.vo.DriftLogVO;
import com.debao.defiles.vo.query.DriftLogQueryVO;

import java.util.List;

public interface DriftLogDAO {
	
	boolean insert(DriftLogVO driftLogVO);

	boolean update(DriftLogVO driftLogVO);

	boolean delete(Integer id);

	List<DriftLogVO> findAll();

	DriftLogVO findByID(Integer id);
	
	List<DriftLogVO> find(DriftLogQueryVO filter);
	
	Integer totalFind(DriftLogQueryVO filter);
	
}
