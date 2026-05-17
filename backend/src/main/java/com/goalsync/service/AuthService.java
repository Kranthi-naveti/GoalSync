// src/main/java/com/goalsync/service/AuthService.java

package com.goalsync.service;

import com.goalsync.dto.request.LoginRequest;
import com.goalsync.dto.response.LoginResponse;
import com.goalsync.dto.request.RegisterRequest;
import com.goalsync.dto.response.RegisterResponse;

public interface AuthService {

    /**
     * Authenticate user and return JWT token with user details.
     *
     * @param request login request containing email and password
     * @return login response containing token, email, role, and message
     */
    LoginResponse login(LoginRequest request);

    /**
     * Register a new user and return registration response.
     *
     * @param request registration request containing user details
     * @return registration response containing message, email, and role
     */
    RegisterResponse register(RegisterRequest request);
}