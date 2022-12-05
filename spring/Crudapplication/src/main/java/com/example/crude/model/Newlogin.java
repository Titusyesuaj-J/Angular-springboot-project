package com.example.crude.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="logintable")
public class Newlogin {

	@Id
	private String userId;
	
	public Newlogin() {
		
	}
	
	public Newlogin(String userId, String password, String cpassword, String email) {
		super();
		this.userId = userId;
		this.password = password;
		this.cpassword = cpassword;
		this.email = email;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	private String password;
	private String cpassword;
	private String email;
	
}
