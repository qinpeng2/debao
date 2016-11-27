package com.debao.defiles.services.file;

import com.debao.defiles.vo.QualityVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.QualityQueryVO;

import java.util.List;

public interface QualityService {
	
	QualityVO findByID(Integer fileid);

	boolean insert(QualityVO qualityVO, UserVO userVO);
	
	boolean update(QualityVO qualityVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<QualityVO> fuzzyFind(QualityQueryVO filter);

	int totalFuzzyFind(QualityQueryVO filter);
	
	List<QualityVO> find(QualityQueryVO filter);

	int totalFind(QualityQueryVO filter);
	
}
