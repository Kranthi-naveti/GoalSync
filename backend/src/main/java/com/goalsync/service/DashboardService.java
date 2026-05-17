// src/main/java/com/goalsync/service/DashboardService.java

package com.goalsync.service;

import com.goalsync.dto.response.DashboardStatsResponse;

public interface DashboardService {

    /**
     * Retrieve summary statistics for the admin dashboard.
     *
     * @return dashboard statistics
     */
    DashboardStatsResponse getDashboardStats();
}