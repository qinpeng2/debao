package com.debao.defiles.services.file;

import com.debao.defiles.vo.DriftVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.DriftQueryVO;

import java.util.List;

public interface DriftService {
	
	DriftVO findByID(Integer fileid);

	boolean insert(DriftVO driftVO, UserVO userVO);
	
	boolean update(DriftVO driftVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<DriftVO> fuzzyFind(DriftQueryVO filter);

	int totalFuzzyFind(DriftQueryVO filter);
	
	List<DriftVO> find(DriftQueryVO filter);

	int totalFind(DriftQueryVO filter);
	
}
