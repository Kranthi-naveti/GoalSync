package com.goalsync.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateGoalRequest {

    private String title;
    private String description;
    private String status;
    private Long userId;

    // Manual getter
    public Long getUserId() {
        return userId;
    }
    
    // Manual setter
    public void setUserId(Long userId) {
        this.userId = userId;
    }
}