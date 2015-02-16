package com.debao.defiles.controller.user;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.constant.Roles;
import com.debao.defiles.services.category.CategoryService;
import com.debao.defiles.services.user.UserService;
import com.debao.defiles.vo.UserVO;

@Controller
public class LogonController {
	
	public static final String SYSTEM_USER = "SYSTEM_USER";

	@Autowired
	private UserService userService;
	
	@Autowired
	private CategoryService categoryService;
	
	
	@RequestMapping(value = "login.html", method = RequestMethod.GET)
	public String loginIndex(ModelMap map) {
		
		Object errorMsg = map.get(HtmlParams.ERROR);
		if (errorMsg != null) {
			map.put(HtmlParams.ERROR, (String)errorMsg);
		}
		
		return "login";
	}
	
	@RequestMapping(value = "logout.html", method = RequestMethod.GET)
	public String logout(HttpServletRequest req, ModelMap map) {
		
		req.getSession().removeAttribute(LogonController.SYSTEM_USER);
		
		return "login";
	}
	
	@RequestMapping(value = "processLogin.html", method = RequestMethod.POST)
	public String processLogin(HttpServletRequest req, ModelMap map, String username, String password, String checkcode) {
		
		UserVO validUser = userService.find(username);
		
		if (validUser != null && validUser.getPassword().equals(password)) {
			req.getSession().setAttribute(LogonController.SYSTEM_USER, validUser);
			return mainIndex(req, map);
		} else {
			map.put(HtmlParams.ERROR, "用户名或密码不正确!");
			return loginIndex(map);
		}
	}
	
	@RequestMapping(value = "main.html", method = RequestMethod.GET)
	public String mainIndex(HttpServletRequest req, ModelMap map) {

		String permission = permission(req);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		map.put("categories", categoryService.findAll());
		
		return "main";
	}
	
	/**
	 * 网站基本权限
	 * 
	 * @param req
	 * @return
	 */
	public static String permission(HttpServletRequest req) {
		return permission(req, false);
	}
	
	/**
	 * 权限检查
	 * @param req
	 * @param adminRequired
	 * @return
	 */
	public static String permission(HttpServletRequest req, boolean adminRequired) {
		
		boolean result = false;

		UserVO user = getCurrentUser(req);
		
		if (user != null && user.getUserid() > 0) {
			if (adminRequired) {
				if (user.getRoleid() == Roles.STAFF.ordinal()) {
					result = true;
				}
			} else {
				result = true;
			}
		}
		if (!result) {
			return "login";
		} else {
			return null;
		}
	}
	
	public static UserVO getCurrentUser(HttpServletRequest req) {
		return (UserVO) req.getSession().getAttribute(LogonController.SYSTEM_USER);
	}

	public CategoryService getCategoryService() {
		return categoryService;
	}

	public void setCategoryService(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	
}
