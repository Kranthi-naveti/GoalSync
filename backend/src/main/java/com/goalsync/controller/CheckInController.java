// src/main/java/com/goalsync/controller/CheckInController.java

package com.goalsync.controller;

import com.goalsync.dto.request.CreateCheckInRequest;
import com.goalsync.dto.response.CheckInResponse;
import com.goalsync.service.CheckInService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/checkins")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CheckInController {

    private final CheckInService checkInService;

    /**
     * Create a new quarterly check-in.
     */
    @PostMapping
    public ResponseEntity<CheckInResponse> createCheckIn(
            @RequestBody CreateCheckInRequest request
    ) {
        CheckInResponse response = checkInService.createCheckIn(request);
        return ResponseEntity.ok(response);
    }

    /**
     * Get all check-ins.
     */
    @GetMapping
    public ResponseEntity<List<CheckInResponse>> getAllCheckIns() {
        List<CheckInResponse> checkIns = checkInService.getAllCheckIns();
        return ResponseEntity.ok(checkIns);
    }
}