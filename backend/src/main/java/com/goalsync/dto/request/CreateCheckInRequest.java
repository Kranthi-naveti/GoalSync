// src/main/java/com/goalsync/dto/request/CreateCheckInRequest.java

package com.goalsync.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCheckInRequest {

    private String progress;
    private String achievements;
    private String blockers;
    private Long goalId;
    private Long userId;
}