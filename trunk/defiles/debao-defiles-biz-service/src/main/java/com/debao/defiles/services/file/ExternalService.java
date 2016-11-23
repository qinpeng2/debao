package com.debao.defiles.services.file;

import com.debao.defiles.vo.ExternalVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.ExternalQueryVO;

import java.util.List;

public interface ExternalService {
	
	ExternalVO findByID(Integer fileid);

	boolean insert(ExternalVO driftVO, UserVO userVO);
	
	boolean update(ExternalVO driftVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<ExternalVO> fuzzyFind(ExternalQueryVO filter);

	int totalFuzzyFind(ExternalQueryVO filter);
	
	List<ExternalVO> find(ExternalQueryVO filter);

	int totalFind(ExternalQueryVO filter);
	
}
