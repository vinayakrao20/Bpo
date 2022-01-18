package com.bpoBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bpoBackend.model.User;
import com.bpoBackend.repository.UserRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController 
{
	@Autowired
private UserRepository userRepository;
	@GetMapping
	public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}
	// build create employee Rest Api
	@PostMapping
	public User createUser(@RequestBody User user) 
	{
		return userRepository.save(user);
	}
}
