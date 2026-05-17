package com.goalsync.config;

import com.goalsync.entity.User;
import com.goalsync.enums.Role;
import com.goalsync.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initData() {
        return args -> {

            // Employee user
            if (!userRepository.existsByEmail("employee@goalsync.com")) {
                User employee = new User();
                employee.setName("Demo Employee");
                employee.setEmail("employee@goalsync.com");
                employee.setPassword(passwordEncoder.encode("password123"));
                employee.setRole(Role.EMPLOYEE);

                userRepository.save(employee);
            }

            // Manager user
            if (!userRepository.existsByEmail("manager@goalsync.com")) {
                User manager = new User();
                manager.setName("Demo Manager");
                manager.setEmail("manager@goalsync.com");
                manager.setPassword(passwordEncoder.encode("password123"));
                manager.setRole(Role.MANAGER);

                userRepository.save(manager);
            }

            // Admin user
            if (!userRepository.existsByEmail("admin@goalsync.com")) {
                User admin = new User();
                admin.setName("Demo Admin");
                admin.setEmail("admin@goalsync.com");
                admin.setPassword(passwordEncoder.encode("password123"));
                admin.setRole(Role.ADMIN);

                userRepository.save(admin);
            }

            System.out.println("Demo users created successfully.");
            System.out.println("Password for all demo users: password123");
        };
    }
}