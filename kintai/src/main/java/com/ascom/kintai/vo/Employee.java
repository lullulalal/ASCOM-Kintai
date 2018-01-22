package com.ascom.kintai.vo;

public class Employee {
	public String email;
	public String nickName;
	public String firstName;
	public String lastName;
	public String department;
	public String phone;
	public int status;
	
	public Employee() {
		super();
	}
	
	public Employee(String email, String nickName, String firstName, String lastName, String department, String phone,
			int status) {
		super();
		this.email = email;
		this.nickName = nickName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
		this.phone = phone;
		this.status = status;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Employee [email=" + email + ", nickName=" + nickName + ", firstName=" + firstName + ", lastName="
				+ lastName + ", department=" + department + ", phone=" + phone + ", status=" + status + "]";
	}
}
