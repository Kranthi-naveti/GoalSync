// src/main/java/com/goalsync/controller/PerformanceReviewController.java

package com.goalsync.controller;

import com.goalsync.dto.request.CreatePerformanceReviewRequest;
import com.goalsync.dto.response.PerformanceReviewResponse;
import com.goalsync.service.PerformanceReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PerformanceReviewController {

    private final PerformanceReviewService performanceReviewService;

    /**
     * Create a new performance review.
     */
    @PostMapping
    public ResponseEntity<PerformanceReviewResponse> createReview(
            @RequestBody CreatePerformanceReviewRequest request
    ) {
        PerformanceReviewResponse response =
                performanceReviewService.createReview(request);
        return ResponseEntity.ok(response);
    }

    /**
     * Get all performance reviews.
     */
    @GetMapping
    public ResponseEntity<List<PerformanceReviewResponse>> getAllReviews() {
        List<PerformanceReviewResponse> reviews =
                performanceReviewService.getAllReviews();
        return ResponseEntity.ok(reviews);
    }
}