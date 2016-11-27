package com.debao.defiles.services.file;

import com.debao.defiles.vo.SupplyVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.SupplyQueryVO;

import java.util.List;

public interface SupplyService {
	
	SupplyVO findByID(Integer fileid);

	boolean insert(SupplyVO supplyVO, UserVO userVO);
	
	boolean update(SupplyVO supplyVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<SupplyVO> fuzzyFind(SupplyQueryVO filter);

	int totalFuzzyFind(SupplyQueryVO filter);
	
	List<SupplyVO> find(SupplyQueryVO filter);

	int totalFind(SupplyQueryVO filter);
	
}
