package com.bpoBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bpoBackend.model.User;

public interface UserRepository extends JpaRepository<User, Long>
{
// all crud database methods
}
