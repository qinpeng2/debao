/**
 * 
 */
package com.debao.defiles.controller.interceptor;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * 
 */
public class VelocityBeanUtilExposeInterceptor extends
		HandlerInterceptorAdapter {
	private static final String TOOLS = "tools";
	private Map</* utilName */String, /* bean */Object> utilMap = new HashMap<String, Object>();

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		request.setAttribute(TOOLS, utilMap);

	}

	public Map<String, Object> getUtilMap() {
		return utilMap;
	}

	public void setUtilMap(Map<String, Object> utilMap) {
		this.utilMap = utilMap;
	}

}
