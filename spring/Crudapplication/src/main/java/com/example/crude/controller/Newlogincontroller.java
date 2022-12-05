package com.example.crude.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crude.model.Newlogin;
import com.example.crude.repository.Newloginrepository;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")

public class Newlogincontroller {
	
	@Autowired
	private Newloginrepository repo;
	
	@PostMapping("/newuser")
	public ResponseEntity<Newlogin> registerUser(@RequestBody Newlogin user) {
		
	 System.out.println("Controller called");
	 return ResponseEntity.ok(repo.save(user));
		
	}

	
	

}
