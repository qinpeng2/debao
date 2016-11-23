package com.debao.defiles.services.file;

import com.debao.defiles.vo.InternalVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.InternalQueryVO;

import java.util.List;

public interface InternalService {
	
	InternalVO findByID(Integer fileid);

	boolean insert(InternalVO driftVO, UserVO userVO);
	
	boolean update(InternalVO driftVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<InternalVO> fuzzyFind(InternalQueryVO filter);

	int totalFuzzyFind(InternalQueryVO filter);
	
	List<InternalVO> find(InternalQueryVO filter);

	int totalFind(InternalQueryVO filter);
	
}
