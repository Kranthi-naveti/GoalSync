// src/main/java/com/goalsync/dto/response/RegisterResponse.java

package com.goalsync.dto.response;

import com.goalsync.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterResponse {

    private String message;
    private String email;
    private Role role;
}