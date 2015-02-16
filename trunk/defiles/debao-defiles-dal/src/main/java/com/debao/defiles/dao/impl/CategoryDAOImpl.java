package com.debao.defiles.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.debao.defiles.dao.CategoryDAO;
import com.debao.defiles.dao.mapper.CategoryVOMapper;
import com.debao.defiles.vo.CategoryVO;

public class CategoryDAOImpl implements CategoryDAO {
	
	@Autowired
	private CategoryVOMapper categoryVOMapper;
	private SqlSession sqlSession;

	@Override
	public boolean insert(CategoryVO categoryVO) {
		return 1 == categoryVOMapper.insert(categoryVO);
	}

	@Override
	public boolean update(CategoryVO categoryVO) {
		return 1 == categoryVOMapper.updateByPrimaryKey(categoryVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == categoryVOMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<CategoryVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.CategoryVOMapper.selectAll");
	}
	
	@Override
	public CategoryVO findByID(Integer id) {
		return categoryVOMapper.selectByPrimaryKey(id);
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public CategoryVOMapper getCategoryVOMapper() {
		return categoryVOMapper;
	}


	public void setCategoryVOMapper(CategoryVOMapper categoryVOMapper) {
		this.categoryVOMapper = categoryVOMapper;
	}
}
