// src/main/java/com/goalsync/service/impl/GoalServiceImpl.java

package com.goalsync.service.impl;

import com.goalsync.dto.request.CreateGoalRequest;
import com.goalsync.dto.response.GoalResponse;
import com.goalsync.entity.Goal;
import com.goalsync.entity.User;
import com.goalsync.repository.GoalRepository;
import com.goalsync.repository.UserRepository;
import com.goalsync.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GoalServiceImpl implements GoalService {

    private final GoalRepository goalRepository;
    private final UserRepository userRepository;

    @Override
    public GoalResponse createGoal(CreateGoalRequest request) {

        // Find the user by ID
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        // Create goal entity
        Goal goal = new Goal();
        goal.setTitle(request.getTitle());
        goal.setDescription(request.getDescription());
        goal.setStatus(request.getStatus());
        goal.setUser(user);

        // Save goal
        Goal savedGoal = goalRepository.save(goal);

        // Convert entity to response DTO
        return mapToResponse(savedGoal);
    }

    @Override
    public List<GoalResponse> getAllGoals() {
        return goalRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    /**
     * Convert Goal entity to GoalResponse DTO.
     */
    private GoalResponse mapToResponse(Goal goal) {
        return new GoalResponse(
                goal.getId(),
                goal.getTitle(),
                goal.getDescription(),
                goal.getStatus(),
                goal.getUser().getId(),
                goal.getUser().getName()
        );
    }
}