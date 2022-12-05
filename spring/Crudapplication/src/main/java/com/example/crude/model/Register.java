package com.example.crude.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_registeration")
public class Register {
	
	@Id
	private String patientname;
	public String getPatientname() {
		return patientname;
	}
	public void setPatientname(String patientname) {
		this.patientname = patientname;
	}
	public String getFathername() {
		return fathername;
	}
	public void setFathername(String fathername) {
		this.fathername = fathername;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Register() {
	}
	public Register(String patientname, String fathername, Long age, String gender, String email, String speciality,
			String address) {
		super();
		this.patientname = patientname;
		this.fathername = fathername;
		this.age = age;
		this.gender = gender;
		this.email = email;
		this.speciality = speciality;
		this.address = address;
	}
	private String fathername;
	private Long age;
	private String gender;
	private String email;
	private String speciality;
	private String address;
	
	
	
}
