// src/main/java/com/goalsync/repository/UserRepository.java

package com.goalsync.repository;

import com.goalsync.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Find a user by email (used for login)
    Optional<User> findByEmail(String email);

    // Check whether a user already exists with the given email
    boolean existsByEmail(String email);
}