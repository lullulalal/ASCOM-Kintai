package com.ascom.kintai.intercepter;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.WebUtils;

import com.ascom.kintai.service.KintaiCommonService;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappUser;

public class AuthenticationInterceptor extends HandlerInterceptorAdapter{
	 
	@Autowired
    KintaiCommonService service;
     
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
         
        HttpSession session = request.getSession();
        Cookie loginCookie = WebUtils.getCookie(request, "loginCookie");
        if ( loginCookie != null ){
        	String sessionId = loginCookie.getValue();
        	WorkappUser account = service.checkUserWithSessionKey(sessionId);
        	if ( account != null ){ 
        			session.setAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT, account);
        			AppSet appSet = service.getAppSetting(account.getEmail());
        			session.setAttribute(KintaiConstant.SESSION_SETTING, appSet);
        			response.sendRedirect("shukinCheck");
        			return false;
        	}
        }
        return true; 
    }
 
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }
     
}

