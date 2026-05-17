
// src/main/java/com/goalsync/dto/response/PerformanceReviewResponse.java

package com.goalsync.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PerformanceReviewResponse {

    private Long id;
    private Integer rating;
    private String feedback;
    private Long employeeId;
    private String employeeName;
    private Long managerId;
    private String managerName;
}