// src/main/java/com/goalsync/service/PerformanceReviewService.java

package com.goalsync.service;

import com.goalsync.dto.request.CreatePerformanceReviewRequest;
import com.goalsync.dto.response.PerformanceReviewResponse;

import java.util.List;

public interface PerformanceReviewService {

    /**
     * Create a new performance review.
     *
     * @param request performance review creation request
     * @return created review response
     */
    PerformanceReviewResponse createReview(
            CreatePerformanceReviewRequest request
    );

    /**
     * Retrieve all performance reviews.
     *
     * @return list of all reviews
     */
    List<PerformanceReviewResponse> getAllReviews();
}
