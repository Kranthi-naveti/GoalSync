// src/main/java/com/goalsync/dto/request/CreatePerformanceReviewRequest.java

package com.goalsync.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreatePerformanceReviewRequest {

    private Integer rating;
    private String feedback;
    private Long employeeId;
    private Long managerId;
}