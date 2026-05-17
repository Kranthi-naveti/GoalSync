// src/main/java/com/goalsync/dto/response/CheckInResponse.java

package com.goalsync.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CheckInResponse {

    private Long id;
    private String progress;
    private String achievements;
    private String blockers;
    private Long goalId;
    private String goalTitle;
    private Long userId;
    private String userName;
}