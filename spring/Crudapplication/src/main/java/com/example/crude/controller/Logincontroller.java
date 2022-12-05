package com.example.crude.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crude.model.Login;
import com.example.crude.repository.Loginrepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class Logincontroller {
	@Autowired
	private Loginrepository repo;
	
	@GetMapping("/getall")
	public List<Login> getallusers(){
		return repo.findAll();
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Login userData){
		Login userLogin=repo.findByUserId(userData.getUserId());
		if(userLogin.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(userLogin);
		
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	
}
