// src/main/java/com/goalsync/service/impl/PerformanceReviewServiceImpl.java

package com.goalsync.service.impl;

import com.goalsync.dto.request.CreatePerformanceReviewRequest;
import com.goalsync.dto.response.PerformanceReviewResponse;
import com.goalsync.entity.PerformanceReview;
import com.goalsync.entity.User;
import com.goalsync.repository.PerformanceReviewRepository;
import com.goalsync.repository.UserRepository;
import com.goalsync.service.PerformanceReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PerformanceReviewServiceImpl
        implements PerformanceReviewService {

    private final PerformanceReviewRepository performanceReviewRepository;
    private final UserRepository userRepository;

    @Override
    public PerformanceReviewResponse createReview(
            CreatePerformanceReviewRequest request
    ) {

        // Find employee by ID
        User employee = userRepository.findById(
                request.getEmployeeId()
        ).orElseThrow(() ->
                new RuntimeException("Employee not found"));

        // Find manager by ID
        User manager = userRepository.findById(
                request.getManagerId()
        ).orElseThrow(() ->
                new RuntimeException("Manager not found"));

        // Create review entity
        PerformanceReview review = new PerformanceReview();
        review.setRating(request.getRating());
        review.setFeedback(request.getFeedback());
        review.setEmployee(employee);
        review.setManager(manager);

        // Save review
        PerformanceReview savedReview =
                performanceReviewRepository.save(review);

        // Convert entity to response DTO
        return mapToResponse(savedReview);
    }

    @Override
    public List<PerformanceReviewResponse> getAllReviews() {
        return performanceReviewRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    /**
     * Convert PerformanceReview entity to response DTO.
     */
    private PerformanceReviewResponse mapToResponse(
            PerformanceReview review
    ) {
        return new PerformanceReviewResponse(
                review.getId(),
                review.getRating(),
                review.getFeedback(),
                review.getEmployee().getId(),
                review.getEmployee().getName(),
                review.getManager().getId(),
                review.getManager().getName()
        );
    }
}