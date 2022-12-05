package com.example.crude.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crude.model.Login;

@Repository
public interface Loginrepository extends JpaRepository<Login,String> {
	Login findByUserId(String userId);
}
