// src/main/java/com/goalsync/dto/response/LoginResponse.java

package com.goalsync.dto.response;

import com.goalsync.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    private String token;
    private String email;
    private Role role;
    private String message;
}