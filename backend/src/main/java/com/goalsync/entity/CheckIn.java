package com.goalsync.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "check_ins")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CheckIn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Quarterly progress summary
    @Column(nullable = false, length = 1000)
    private String progress;

    // Achievements during this period
    @Column(length = 1000)
    private String achievements;

    // Blockers or challenges
    @Column(length = 1000)
    private String blockers;

    // Goal associated with this check-in
    @ManyToOne
    @JoinColumn(name = "goal_id", nullable = false)
    private Goal goal;

    // User who submitted the check-in
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}