package com.debao.defiles.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.debao.defiles.constant.Roles;
import com.debao.defiles.services.user.UserService;
import com.debao.defiles.vo.UserVO;

public class CustomUserDetailsService implements UserDetailsService {
	
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		UserVO user = userService.find(username);
		
		if (user != null) {
			return new User(user.getUsername(), user.getPassword(), getAuthorities(Roles.values()[user.getRoleid()]));
		}

		return new User("temp", "temp", null);
	}
	
	public Collection<GrantedAuthority> getAuthorities(Roles role) {  
		
		List<GrantedAuthority> authList = new ArrayList<GrantedAuthority>();
		
		if (role == Roles.STAFF) {
			System.out.println("管理员");
			authList.add(new SimpleGrantedAuthority("ROLE_ADMIN"));  
		} else if (role == Roles.VISTOR) {
			System.out.println("访客");
			authList.add(new SimpleGrantedAuthority("ROLE_USER")); 
		} else {
			authList.add(new SimpleGrantedAuthority("IS_AUTHENTICATED_ANONYMOUSLY"));
		}
		
		return authList;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

}
