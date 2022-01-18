package com.bpoBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bpoBackend.model.User;
import com.bpoBackend.repository.UserRepository;

@SpringBootApplication
public class BpoBackendApplication implements CommandLineRunner
{
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) 
	{
		SpringApplication.run(BpoBackendApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception 
	{	
		/*
		 * User user=new User(); user.setName("vinayak rao");
		 * user.setEmail("abc@gmail.com"); user.setPhoneNumber("9074774396");
		 * user.setPassword("abcqyui1"); userRepository.save(user);
		 */	
	}
	
}
