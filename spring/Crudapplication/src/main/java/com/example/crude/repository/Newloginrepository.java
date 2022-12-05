package com.example.crude.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crude.model.Login;
import com.example.crude.model.Newlogin;

@Repository
public interface Newloginrepository extends JpaRepository<Newlogin,String> {
	Newlogin findByUserId(String userId);
}
