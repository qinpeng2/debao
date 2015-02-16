package com.debao.defiles.services.user.impl;

import java.util.List;

import com.debao.defiles.dao.UserDAO;
import com.debao.defiles.services.user.UserService;
import com.debao.defiles.vo.UserVO;

public class UserServiceImpl implements UserService {
	
	private UserDAO userDAO;

	@Override
	public List<UserVO> find(UserVO filterVO) {
		return userDAO.findBySelective(filterVO);
	}
	
	@Override
	public UserVO find(String username) {
		UserVO filterVO = new UserVO();
		filterVO.setUsername(username);
		
		List<UserVO> list = userDAO.findBySelective(filterVO);
		if (!list.isEmpty()) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public UserVO findByID(int uid) {
		return userDAO.findByID(uid);
	}

	@Override
	public boolean insert(UserVO vo) {
		return userDAO.insert(vo);
	}

	@Override
	public boolean update(UserVO userVO) {
		return userDAO.update(userVO);
	}

	@Override
	public boolean delete(Integer userid) {
		return userDAO.delete(userid);
	}

	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
	
}
