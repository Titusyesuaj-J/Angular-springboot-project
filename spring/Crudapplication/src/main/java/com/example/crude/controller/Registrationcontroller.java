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

import com.example.crude.model.Register;
import com.example.crude.repository.xyzrepository;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins="http://localhost:4200")
public class Registrationcontroller {
	@Autowired
	private xyzrepository repo;
	
	@GetMapping("/getusers")
	public List<Register> getallusers(){
		return repo.findAll();
	}
	@PostMapping("/newuser")
	public ResponseEntity<Register> registerUser(@RequestBody Register user) {
		
	 System.out.println("Controller called");
	 return ResponseEntity.ok(repo.save(user));
		
	}
}
