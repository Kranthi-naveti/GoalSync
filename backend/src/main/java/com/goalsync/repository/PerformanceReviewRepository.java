// src/main/java/com/goalsync/repository/PerformanceReviewRepository.java

package com.goalsync.repository;

import com.goalsync.entity.PerformanceReview;
import com.goalsync.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerformanceReviewRepository
        extends JpaRepository<PerformanceReview, Long> {

    /**
     * Find all reviews for a specific employee.
     */
    List<PerformanceReview> findByEmployee(User employee);

    /**
     * Find all reviews created by a specific manager.
     */
    List<PerformanceReview> findByManager(User manager);
}