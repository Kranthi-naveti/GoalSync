// src/main/java/com/goalsync/service/impl/CheckInServiceImpl.java

package com.goalsync.service.impl;

import com.goalsync.dto.request.CreateCheckInRequest;
import com.goalsync.dto.response.CheckInResponse;
import com.goalsync.entity.CheckIn;
import com.goalsync.entity.Goal;
import com.goalsync.entity.User;
import com.goalsync.repository.CheckInRepository;
import com.goalsync.repository.GoalRepository;
import com.goalsync.repository.UserRepository;
import com.goalsync.service.CheckInService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CheckInServiceImpl implements CheckInService {

    private final CheckInRepository checkInRepository;
    private final GoalRepository goalRepository;
    private final UserRepository userRepository;

    @Override
    public CheckInResponse createCheckIn(CreateCheckInRequest request) {

        // Find goal by ID
        Goal goal = goalRepository.findById(request.getGoalId())
                .orElseThrow(() ->
                        new RuntimeException("Goal not found"));

        // Find user by ID
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        // Create check-in entity
        CheckIn checkIn = new CheckIn();
        checkIn.setProgress(request.getProgress());
        checkIn.setAchievements(request.getAchievements());
        checkIn.setBlockers(request.getBlockers());
        checkIn.setGoal(goal);
        checkIn.setUser(user);

        // Save check-in
        CheckIn savedCheckIn = checkInRepository.save(checkIn);

        // Convert entity to response DTO
        return mapToResponse(savedCheckIn);
    }

    @Override
    public List<CheckInResponse> getAllCheckIns() {
        return checkInRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    /**
     * Convert CheckIn entity to CheckInResponse DTO.
     */
    private CheckInResponse mapToResponse(CheckIn checkIn) {
        return new CheckInResponse(
                checkIn.getId(),
                checkIn.getProgress(),
                checkIn.getAchievements(),
                checkIn.getBlockers(),
                checkIn.getGoal().getId(),
                checkIn.getGoal().getTitle(),
                checkIn.getUser().getId(),
                checkIn.getUser().getName()
        );
    }
}