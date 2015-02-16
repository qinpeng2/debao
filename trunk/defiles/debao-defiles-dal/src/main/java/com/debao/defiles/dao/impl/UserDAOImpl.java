package com.debao.defiles.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.debao.defiles.dao.UserDAO;
import com.debao.defiles.dao.mapper.UserVOMapper;
import com.debao.defiles.vo.UserVO;

public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private UserVOMapper userVOMapper;
	
	private SqlSession sqlSession;

	@Override
	public boolean insert(UserVO userVO) {
		return 1 == userVOMapper.insert(userVO);
	}

	@Override
	public boolean update(UserVO userVO) {
		return 1 == userVOMapper.updateByPrimaryKey(userVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.UserVOMapper.deleteUser", map) == 1;
		
	}


	@Override
	public List<UserVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.UserVOMapper.selectByFilter", new UserVO());
	}
	
	@Override
	public UserVO findByID(Integer id) {
		return userVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<UserVO> findBySelective(UserVO userVO) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.UserVOMapper.selectByFilter", userVO);
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public UserVOMapper getUserVOMapper() {
		return userVOMapper;
	}


	public void setUserVOMapper(UserVOMapper userVOMapper) {
		this.userVOMapper = userVOMapper;
	}
}
