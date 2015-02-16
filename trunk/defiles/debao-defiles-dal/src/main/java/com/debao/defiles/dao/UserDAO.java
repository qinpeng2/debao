package com.debao.defiles.dao;

import java.util.List;

import com.debao.defiles.vo.UserVO;

public interface UserDAO {
	
	boolean insert(UserVO userVO);

	boolean update(UserVO userVO);

	boolean delete(Integer id);

	List<UserVO> findAll();

	UserVO findByID(Integer id);
	
	List<UserVO> findBySelective(UserVO userVO);
}
