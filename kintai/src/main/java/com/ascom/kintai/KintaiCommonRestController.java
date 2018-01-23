package com.ascom.kintai;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.service.KintaiCommonService;
import com.ascom.kintai.vo.AppSet;

@Controller
public class KintaiCommonRestController {
	
	@Autowired
	KintaiCommonService service;
	
	@ResponseBody
	@RequestMapping(value = "/getText", method = RequestMethod.POST)
	public Map home(String code, HttpSession session) {
		AppSet appSet = (AppSet)session.getAttribute("appSet");
		//로그인 하자 마자 설정을 세선에 다 넣자~!
		return service.getText(appSet, code);
	}
}
