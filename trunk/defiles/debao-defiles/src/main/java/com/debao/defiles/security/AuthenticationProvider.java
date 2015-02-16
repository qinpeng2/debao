/**
 * 
 */
package com.debao.defiles.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import com.debao.defiles.constant.Roles;
import com.debao.defiles.services.user.UserService;
import com.debao.defiles.vo.UserVO;

public class AuthenticationProvider extends
		AbstractUserDetailsAuthenticationProvider {
	
	// private UserLoginService userLoginService;
	private UserService userService;

	@Override
	protected void additionalAuthenticationChecks(UserDetails userDetails,
			UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException {
		// TODO Auto-generated method stub

	}

	@Override
	protected UserDetails retrieveUser(String username,	UsernamePasswordAuthenticationToken authentication)	throws AuthenticationException {	
		
		UserVO user = userService.find(username);
		
		if (user != null) {
			return new User(user.getUsername(), user.getPassword(), getAuthorities(Roles.values()[user.getRoleid()]));
		}

		return new User("temp", "temp", null);
	}
	
	public Collection<GrantedAuthority> getAuthorities(Roles role) {  
		
		List<GrantedAuthority> authList = new ArrayList<GrantedAuthority>();
		
		if (role == Roles.STAFF) {
			authList.add(new SimpleGrantedAuthority("ROLE_ADMIN"));  
		} else if (role == Roles.VISTOR) {
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
