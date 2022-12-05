package com.example.crude.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="logintable")
public class Login {
	@Id
private String userId;
	
	public Login() {
		
	}
public Login(String userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
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
private String password;

}
