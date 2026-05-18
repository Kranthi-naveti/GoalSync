package com.goalsync.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterResponse {

    private String token;
    private String email;
    private String name;   // ✅ Full name of the user
    private String role;
}