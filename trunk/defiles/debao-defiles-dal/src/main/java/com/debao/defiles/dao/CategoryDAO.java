package com.debao.defiles.dao;

import java.util.List;

import com.debao.defiles.vo.CategoryVO;

public interface CategoryDAO {
	
	boolean insert(CategoryVO categoryVO);

	boolean update(CategoryVO categoryVO);

	boolean delete(Integer id);

	List<CategoryVO> findAll();

	CategoryVO findByID(Integer id);
	
}
