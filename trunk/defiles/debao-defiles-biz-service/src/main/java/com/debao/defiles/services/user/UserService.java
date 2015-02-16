package com.debao.defiles.services.user;

import java.util.List;

import com.debao.defiles.vo.UserVO;

public interface UserService {
	
	List<UserVO> find(UserVO filterVO);
	
	UserVO find(String username);

	UserVO findByID(int uid);

	boolean insert(UserVO vo);
	
	boolean update(UserVO user);

	boolean delete(Integer userid);

}
