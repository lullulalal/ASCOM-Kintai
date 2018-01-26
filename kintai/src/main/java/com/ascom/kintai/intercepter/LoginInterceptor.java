package com.ascom.kintai.intercepter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.ascom.kintai.service.KintaiCommonService;
import com.ascom.kintai.util.KintaiConstant;

public class LoginInterceptor extends HandlerInterceptorAdapter {
	@Autowired
    KintaiCommonService service;
     
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
         
        HttpSession session = request.getSession();
        Object obj = session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
        if ( obj == null ){ 
        	System.out.println("asfasf");
        	response.sendRedirect("/kintai");
        	return false;
        }
        return true;
    }
 
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }
}
