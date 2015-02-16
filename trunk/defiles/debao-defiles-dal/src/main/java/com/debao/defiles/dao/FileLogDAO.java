package com.debao.defiles.dao;

import java.util.List;

import com.debao.defiles.vo.FileLogVO;
import com.debao.defiles.vo.query.FileLogQueryVO;

public interface FileLogDAO {
	
	boolean insert(FileLogVO fileLogVO);

	boolean update(FileLogVO fileLogVO);

	boolean delete(Integer id);

	List<FileLogVO> findAll();

	FileLogVO findByID(Integer id);
	
	List<FileLogVO> find(FileLogQueryVO filter);
	
	Integer totalFind(FileLogQueryVO filter);
	
}
