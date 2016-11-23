package com.debao.defiles.dao;

import com.debao.defiles.vo.InternalLogVO;
import com.debao.defiles.vo.query.InternalLogQueryVO;

import java.util.List;

public interface InternalLogDAO {
	
	boolean insert(InternalLogVO internalLogVO);

	boolean update(InternalLogVO internalLogVO);

	boolean delete(Integer id);

	List<InternalLogVO> findAll();

	InternalLogVO findByID(Integer id);
	
	List<InternalLogVO> find(InternalLogQueryVO filter);
	
	Integer totalFind(InternalLogQueryVO filter);
	
}
