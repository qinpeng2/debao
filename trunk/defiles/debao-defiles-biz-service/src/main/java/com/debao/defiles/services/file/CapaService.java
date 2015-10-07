package com.debao.defiles.services.file;

import com.debao.defiles.vo.CapaVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.CapaQueryVO;

import java.util.List;

public interface CapaService {
	
	CapaVO findByID(Integer fileid);

	boolean insert(CapaVO capaVO, UserVO userVO);
	
	boolean update(CapaVO capaVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<CapaVO> fuzzyFind(CapaQueryVO filter);

	int totalFuzzyFind(CapaQueryVO filter);
	
	List<CapaVO> find(CapaQueryVO filter);

	int totalFind(CapaQueryVO filter);
	
}
