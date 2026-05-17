// src/main/java/com/goalsync/service/GoalService.java

package com.goalsync.service;

import com.goalsync.dto.request.CreateGoalRequest;
import com.goalsync.dto.response.GoalResponse;

import java.util.List;

public interface GoalService {

    /**
     * Create a new goal.
     *
     * @param request goal creation request
     * @return created goal response
     */
    GoalResponse createGoal(CreateGoalRequest request);

    /**
     * Retrieve all goals.
     *
     * @return list of all goals
     */
    List<GoalResponse> getAllGoals();
}