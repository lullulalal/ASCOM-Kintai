package com.ascom.kintai;

import java.util.Date;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.WebUtils;

import com.ascom.kintai.service.KintaiCommonService;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappUser;
@Controller
public class KintaiCommonController {

	@Autowired
	KintaiCommonService service;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "home";
	}
	
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String login(HttpSession session, HttpServletResponse response,
						String email, String pwd, String autoLogin) {
		
		boolean rst = service.login(email, pwd, autoLogin);
		
		if(rst == true)
		{
			AppSet appSet = service.getAppSetting(email);
			WorkappUser account = new WorkappUser();
			account.setEmail(email);
			
			session.setAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT, account);
			session.setAttribute(KintaiConstant.SESSION_SETTING, appSet);
			
			if(("on").equals(autoLogin) && 
					appSet.getAuthority()!=KintaiConstant.AUTH_SUPER_ADMIN){
				System.out.println("emfdjdhkTekd!!");
				Cookie cookie = new Cookie("loginCookie", session.getId());
	            cookie.setPath("/");
	            cookie.setMaxAge(KintaiConstant.AUTO_LOGIN_EXPIRE); 
	            response.addCookie(cookie);
	            
                Date sessionLimit = new Date(System.currentTimeMillis() + (1000*KintaiConstant.AUTO_LOGIN_EXPIRE));
                service.keepLogin(account.getEmail(), session.getId(), sessionLimit);
			}
				
			if(appSet.getAuthority() == KintaiConstant.AUTH_SUPER_ADMIN)
				return "redirect:/superSetting";
			else if (appSet.getAuthority() == KintaiConstant.AUTH_ADMIN)
				return "redirect:/shukinCheck";
			else if (appSet.getAuthority() == KintaiConstant.AUTH_USER)
				return "redirect:/shukinCheck";
		}
		
		return "redirect:/";
	}
	
	@RequestMapping(value = "logout", method = RequestMethod.GET)
    public String logout(HttpSession session,HttpServletRequest request, HttpServletResponse response) {
		WorkappUser account = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		if ( account != null ){

			Cookie loginCookie = WebUtils.getCookie(request, "loginCookie");
			if ( loginCookie != null ){
				loginCookie.setPath("/");
				loginCookie.setMaxAge(0);
				response.addCookie(loginCookie);
	                 
				Date date = new Date(System.currentTimeMillis());
				service.keepLogin(account.getEmail(), session.getId(), date);
			}
	    }
		
		session.invalidate(); 
		
        return "redirect:/";
    }

}
