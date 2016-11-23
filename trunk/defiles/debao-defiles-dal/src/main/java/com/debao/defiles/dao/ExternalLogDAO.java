package com.debao.defiles.dao;

import com.debao.defiles.vo.ExternalLogVO;
import com.debao.defiles.vo.query.ExternalLogQueryVO;

import java.util.List;

public interface ExternalLogDAO {
	
	boolean insert(ExternalLogVO externalLogVO);

	boolean update(ExternalLogVO externalLogVO);

	boolean delete(Integer id);

	List<ExternalLogVO> findAll();

	ExternalLogVO findByID(Integer id);
	
	List<ExternalLogVO> find(ExternalLogQueryVO filter);
	
	Integer totalFind(ExternalLogQueryVO filter);
	
}
