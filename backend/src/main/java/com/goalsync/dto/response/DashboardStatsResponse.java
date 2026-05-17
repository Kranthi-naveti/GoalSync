// src/main/java/com/goalsync/dto/response/DashboardStatsResponse.java

package com.goalsync.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardStatsResponse {

    private long totalUsers;
    private long totalGoals;
    private long totalCheckIns;
    private long totalReviews;
}