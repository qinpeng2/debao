package com.debao.defiles.dao;

import com.debao.defiles.vo.QualityLogVO;
import com.debao.defiles.vo.query.QualityLogQueryVO;

import java.util.List;

public interface QualityLogDAO {
	
	boolean insert(QualityLogVO qualityLogVO);

	boolean update(QualityLogVO qualityLogVO);

	boolean delete(Integer id);

	List<QualityLogVO> findAll();

	QualityLogVO findByID(Integer id);
	
	List<QualityLogVO> find(QualityLogQueryVO filter);
	
	Integer totalFind(QualityLogQueryVO filter);
	
}
