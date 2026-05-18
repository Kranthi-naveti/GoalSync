// src/main/java/com/goalsync/service/impl/AuthServiceImpl.java

package com.goalsync.service.impl;
import com.goalsync.dto.request.LoginRequest;
import com.goalsync.dto.response.LoginResponse;
import com.goalsync.entity.User;
import com.goalsync.repository.UserRepository;
import com.goalsync.security.JwtUtil;
import com.goalsync.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.goalsync.dto.request.RegisterRequest;
import com.goalsync.dto.response.RegisterResponse;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    @Override
    public LoginResponse login(LoginRequest request) {
        // Find user by email
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password"));

        // Verify password
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {
            throw new RuntimeException("Invalid email or password");
        }

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail());

        // Return response
        return new LoginResponse(
                token,
                user.getEmail(),
                user.getRole(),
                "Login successful"
        );
    }

    @Override
    public RegisterResponse register(RegisterRequest request) {
        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("User already exists");
        }

        // Encode password
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        // Create user entity
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(encodedPassword);
        user.setRole(request.getRole());

        // Save user
        userRepository.save(user);

        // Return response
        return new RegisterResponse(
                jwtUtil.generateToken(user.getEmail()),
                user.getEmail(),
                user.getName(),          // ✅ Send full name
                user.getRole().name()
        );
    }
}