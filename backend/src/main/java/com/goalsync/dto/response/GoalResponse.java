// src/main/java/com/goalsync/dto/response/GoalResponse.java

package com.goalsync.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GoalResponse {

    private Long id;
    private String title;
    private String description;
    private String status;
    private Long userId;
    private String userName;
}