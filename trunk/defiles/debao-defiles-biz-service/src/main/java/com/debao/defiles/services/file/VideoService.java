package com.debao.defiles.services.file;

import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.VideoVO;
import com.debao.defiles.vo.query.VideoQueryVO;

import java.util.List;

public interface VideoService {
	
	VideoVO findByID(Integer fileid);

	boolean insert(VideoVO videoVO, UserVO userVO);
	
	boolean update(VideoVO videoVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<VideoVO> fuzzyFind(VideoQueryVO filter);

	int totalFuzzyFind(VideoQueryVO filter);
	
	List<VideoVO> find(VideoQueryVO filter);

	int totalFind(VideoQueryVO filter);
	
}
