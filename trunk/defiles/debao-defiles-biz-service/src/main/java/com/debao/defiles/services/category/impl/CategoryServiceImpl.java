package com.debao.defiles.services.category.impl;

import java.util.List;

import com.debao.defiles.dao.CategoryDAO;
import com.debao.defiles.services.category.CategoryService;
import com.debao.defiles.vo.CategoryVO;

public class CategoryServiceImpl implements CategoryService {
	
	private CategoryDAO categoryDAO;

	public CategoryDAO getCategoryDAO() {
		return categoryDAO;
	}

	public void setCategoryDAO(CategoryDAO categoryDAO) {
		this.categoryDAO = categoryDAO;
	}
	
	@Override
	public List<CategoryVO> findAll() {
		return categoryDAO.findAll();
	}

	@Override
	public CategoryVO findByID(Integer categoryid) {
		return categoryDAO.findByID(categoryid);
	}

	@Override
	public boolean delete(Integer id) {
		return categoryDAO.delete(id);
	}

	@Override
	public boolean insert(CategoryVO categoryVO) {
		return categoryDAO.insert(categoryVO);
	}

	@Override
	public boolean update(CategoryVO categoryVO) {
		return categoryDAO.update(categoryVO);
	}
	
	

}
