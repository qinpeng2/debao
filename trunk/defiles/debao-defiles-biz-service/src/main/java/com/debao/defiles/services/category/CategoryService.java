package com.debao.defiles.services.category;

import java.util.List;

import com.debao.defiles.vo.CategoryVO;

public interface CategoryService {

	List<CategoryVO> findAll();

	CategoryVO findByID(Integer parseInt);

	boolean delete(Integer parseInt);

	boolean insert(CategoryVO vo);

	boolean update(CategoryVO vo);

}
