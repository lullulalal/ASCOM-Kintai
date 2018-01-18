package com.ascom.kintai.vo;

public class TestVo {
	public String name;

	public TestVo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TestVo(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "TestVo [name=" + name + "]";
	}
	
}
