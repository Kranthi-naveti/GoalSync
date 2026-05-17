// src/main/java/com/goalsync/entity/PerformanceReview.java

package com.goalsync.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "performance_reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PerformanceReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Rating given by manager (for example: 1 to 5)
    @Column(nullable = false)
    private Integer rating;

    // Manager feedback
    @Column(nullable = false, length = 2000)
    private String feedback;

    // Employee being reviewed
    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private User employee;

    // Manager who submitted the review
    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    private User manager;
}