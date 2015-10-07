package com.debao.defiles.dao;

import com.debao.defiles.vo.VideoLogVO;
import com.debao.defiles.vo.query.VideoLogQueryVO;

import java.util.List;

public interface VideoLogDAO {
	
	boolean insert(VideoLogVO videoLogVO);

	boolean update(VideoLogVO videoLogVO);

	boolean delete(Integer id);

	List<VideoLogVO> findAll();

	VideoLogVO findByID(Integer id);
	
	List<VideoLogVO> find(VideoLogQueryVO filter);
	
	Integer totalFind(VideoLogQueryVO filter);
	
}
