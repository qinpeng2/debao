package com.debao.defiles.dao;

import java.util.List;

import com.debao.defiles.vo.FileVO;
import com.debao.defiles.vo.query.FileQueryVO;

public interface FileDAO {
	
	boolean insert(FileVO fileVO);
	
	Integer insertedID();

	boolean update(FileVO fileVO);

	boolean delete(Integer id);

	List<FileVO> findAll();

	FileVO findByID(Integer id);
	
	List<FileVO> find(FileQueryVO filter);
	
	Integer totalFind(FileQueryVO filter);
	
	List<FileVO> fuzzyFind(FileQueryVO filter);
	
	Integer totalFuzzyFind(FileQueryVO filter);
}
