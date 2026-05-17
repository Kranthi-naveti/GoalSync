// src/main/java/com/goalsync/controller/GoalController.java

package com.goalsync.controller;

import com.goalsync.dto.request.CreateGoalRequest;
import com.goalsync.dto.response.GoalResponse;
import com.goalsync.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/goals")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GoalController {

    private final GoalService goalService;

    /**
     * Create a new goal.
     */
    @PostMapping
    public ResponseEntity<GoalResponse> createGoal(
            @RequestBody CreateGoalRequest request
    ) {
        GoalResponse response = goalService.createGoal(request);
        return ResponseEntity.ok(response);
    }

    /**
     * Get all goals.
     */
    @GetMapping
    public ResponseEntity<List<GoalResponse>> getAllGoals() {
        List<GoalResponse> goals = goalService.getAllGoals();
        return ResponseEntity.ok(goals);
    }
}