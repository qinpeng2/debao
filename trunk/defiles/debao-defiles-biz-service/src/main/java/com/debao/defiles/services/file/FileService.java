package com.debao.defiles.services.file;

import java.util.List;

import com.debao.defiles.vo.FileVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.FileQueryVO;

public interface FileService {
	
	FileVO findByID(Integer fileid);

	boolean insert(FileVO fileVO, UserVO userVO);
	
	boolean update(FileVO fileVO, UserVO userVO);

	boolean delete(Integer fileid, final UserVO userVO);
	
	List<FileVO> fuzzyFind(FileQueryVO filter);

	int totalFuzzyFind(FileQueryVO filter);
	
	List<FileVO> find(FileQueryVO filter);

	int totalFind(FileQueryVO filter);
	
}
