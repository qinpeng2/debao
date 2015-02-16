package com.debao.defiles.controller.user;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.constant.Roles;
import com.debao.defiles.request.UserRequest;
import com.debao.defiles.services.user.UserService;
import com.debao.defiles.vo.UserVO;

@Controller
public class UserController {
	
	private UserService userService;
	
	/**
	 * 庸碌列表
	 * 
	 * @param map
	 * @param roleid
	 * @return
	 */
	@RequestMapping(value = "userlist.html", method = RequestMethod.GET)
	public String showUsers(HttpServletRequest req, ModelMap map, Integer roleid) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO filterVO = new UserVO();
		filterVO.setRoleid(roleid);
		List<UserVO> users = userService.find(filterVO);
		
		map.put("roleid", roleid);
		map.put("users", users);
		
		return "userlist";
	}
	
	/**
	 * 新用户页面
	 * 
	 * @param map
	 * @param roleid
	 * @return
	 */
	@RequestMapping(value = "changeuser.html", method = RequestMethod.GET)
	public String changeUser(HttpServletRequest req, ModelMap map, Integer roleid) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		map.put("roleid", roleid);
		return "user";
	}
	
	/**
	 * 添加新用户操作
	 * 
	 * @param map
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "processChangeUser.html", method = RequestMethod.POST)
	public String processChangeUser(HttpServletRequest request, ModelMap map, UserRequest req) {
		
		String permission = LogonController.permission(request, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		// validation
		String errMsg = "";
		
		String userName = req.getUsername();
		String password = req.getPassword();
		String rePassword = req.getRepassword();
		if (userName == null || userName.isEmpty()) {
			errMsg = "请输入登录名称！";
		} else if (userName.length() < 3) {
			errMsg = "登录名称不能少于3位！";
		} else if (password == null || password.isEmpty()) {
			errMsg = "请输入密码！";
		} else if (rePassword == null || rePassword.isEmpty()) {
			errMsg = "请输入确认密码！";
		} else if (password.length() < 3) {
			errMsg = "登录密码不能少于3位！";
		} else if (rePassword.length() < 3) {
			errMsg = "确认密码不能少于3位！";
		} else if (!password.equals(rePassword)) {
			errMsg = "两次密码不一致！";
		} else if (req.getRealname() == null || req.getRealname().isEmpty()) {
			errMsg = "请输入真实姓名！";
		} else if (req.getCellphonenumber() == null || req.getCellphonenumber().isEmpty()) {
			errMsg = "请输入手机号码！";
		} else if (req.getEmail() == null || req.getEmail().isEmpty()) {
			errMsg = "请输入邮件地址";
		}
		
		if (!errMsg.isEmpty()) {
			map.put(HtmlParams.ERROR, errMsg);
			return changeUser(request, map, req.getRoleid());
		}
		
		// 添加新用户
		
		UserVO vo = new UserVO();
		vo.setUsername(userName);
		vo.setRoleid(req.getRoleid());
		vo.setPassword(password);
		vo.setRealname(req.getRealname());
		vo.setPhonenumber(req.getPhonenumber());
		vo.setCellphonenumber(req.getCellphonenumber());
		vo.setEmail(req.getEmail());
		vo.setDeleted(false);
		
		userService.insert(vo);
		
		return showUsers(request, map, req.getRoleid());
	}
	
	/**
	 * 删除用户
	 * @param map
	 * @return
	 */
	@RequestMapping(value = "removeUser.html", method = RequestMethod.GET)
	public String removeUser(HttpServletRequest req, ModelMap map, Integer userid) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO user = userService.findByID(userid);
		map.put("user", user);
		
		return "userremove";
	}
	
	/**
	 * 删除用户操作
	 * @param map
	 * @return
	 */
	@RequestMapping(value = "processRemoveUser.html", method = RequestMethod.POST)
	public String processRemoveUser(HttpServletRequest request, ModelMap map, UserRequest req) {
		
		String permission = LogonController.permission(request, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO user = userService.findByID(req.getUserid());
		
		if (!req.getPassword().equals(user.getPassword())) {
			map.put(HtmlParams.ERROR, "用户密码不正确!");
			
			return removeUser(request, map, user.getUserid());
		}
		
		userService.delete(user.getUserid());
		
		return showUsers(request, map, user.getRoleid());
	}
	
	
	/**
	 * 删除访客操作
	 * @param map
	 * @return
	 */
	@RequestMapping(value = "removeVistor.html", method = RequestMethod.GET)
	public String removeVistor(HttpServletRequest request, ModelMap map, Integer userid) {
		
		String permission = LogonController.permission(request, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO user = userService.findByID(userid);
		
		if (user.getRoleid() == Roles.VISTOR.ordinal()) {
			userService.delete(user.getUserid());
		} else {
			map.put(HtmlParams.ERROR, "仅能删除访客!");
		}
		
		return showUsers(request, map, user.getRoleid());
	}
	
	/**
	 * 修改密码
	 * 
	 * @param map
	 * @return
	 */
	@RequestMapping(value = "resetpassword.html", method = RequestMethod.GET)
	public String resetPassword(HttpServletRequest req, ModelMap map) {
		
		String permission = LogonController.permission(req);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO user = LogonController.getCurrentUser(req);
		map.put("user", user);
		
		return "userpassword";
	}
	
	/**
	 * 修改密码操作
	 * 
	 * @param map
	 * @param oldpass
	 * @param newpass
	 * @return
	 */
	@RequestMapping(value = "processResetPassword.html", method = RequestMethod.POST)
	public String processResetPassword(HttpServletRequest req, ModelMap map, String oldpass, String newpass) {
		
		String permission = LogonController.permission(req);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO user = LogonController.getCurrentUser(req);
		
		if (!user.getPassword().equals(oldpass)) {
			// 旧密码错误
			map.put(HtmlParams.ERROR, "原始密码不正确.");
		} else {
			// 修改密码
			user.setPassword(newpass);
			userService.update(user);
			
			map.put(HtmlParams.INFO, "密码修改成功，建议您 <a href='logout.html' target='_top'>重新登录</a>!");
		}
		
		return resetPassword(req, map);
	}
	
	/**
	 * 个人信息
	 * 
	 * @param map
	 * @return
	 */
	@RequestMapping(value = "userinfo.html", method = RequestMethod.GET)
	public String userInfo(HttpServletRequest req, ModelMap map) {
		
		String permission = LogonController.permission(req);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		UserVO user = LogonController.getCurrentUser(req);
		
		map.put("user", user);
		
		return "userinfo";
	}

	/**
	 * 修改个人信息操作
	 * @param map
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "changeuserinfo.html", method = RequestMethod.POST)
	public String processChangeUserInfo(HttpServletRequest request, ModelMap map, UserRequest req) {
		
		String permission = LogonController.permission(request);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		// validation
		String errorMsg = "";
		if (req.getRealname() == null || req.getRealname().isEmpty()) {
			errorMsg = "请输入真实姓名！";
		} else if (req.getCellphonenumber() == null || req.getCellphonenumber().isEmpty()) {
			errorMsg = "请输入手机号码！";
		} else if (req.getEmail() == null || req.getEmail().isEmpty()) {
			errorMsg = "请输入邮箱地址！";
		}
		
		if (!errorMsg.isEmpty()) {
			map.put(HtmlParams.ERROR, errorMsg);
			return userInfo(request, map);
		}
		
		// process change
		UserVO user = LogonController.getCurrentUser(request);
		
		user.setRealname(req.getRealname());
		user.setPhonenumber(req.getPhonenumber());
		user.setCellphonenumber(req.getCellphonenumber());
		user.setEmail(req.getEmail());
		
		userService.update(user);
		
		map.put(HtmlParams.INFO, "个人信息修改成功!");
		
		return userInfo(request, map);
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
}
