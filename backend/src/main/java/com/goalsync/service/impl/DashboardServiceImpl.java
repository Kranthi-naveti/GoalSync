// src/main/java/com/goalsync/service/impl/DashboardServiceImpl.java

package com.goalsync.service.impl;

import com.goalsync.dto.response.DashboardStatsResponse;
import com.goalsync.repository.CheckInRepository;
import com.goalsync.repository.GoalRepository;
import com.goalsync.repository.PerformanceReviewRepository;
import com.goalsync.repository.UserRepository;
import com.goalsync.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;
    private final GoalRepository goalRepository;
    private final CheckInRepository checkInRepository;
    private final PerformanceReviewRepository performanceReviewRepository;

    @Override
    public DashboardStatsResponse getDashboardStats() {

        long totalUsers = userRepository.count();
        long totalGoals = goalRepository.count();
        long totalCheckIns = checkInRepository.count();
        long totalReviews = performanceReviewRepository.count();

        return new DashboardStatsResponse(
                totalUsers,
                totalGoals,
                totalCheckIns,
                totalReviews
        );
    }
}