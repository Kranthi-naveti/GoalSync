// src/main/java/com/goalsync/repository/CheckInRepository.java

package com.goalsync.repository;

import com.goalsync.entity.CheckIn;
import com.goalsync.entity.Goal;
import com.goalsync.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckInRepository extends JpaRepository<CheckIn, Long> {

    /**
     * Find all check-ins for a specific goal.
     */
    List<CheckIn> findByGoal(Goal goal);

    /**
     * Find all check-ins submitted by a specific user.
     */
    List<CheckIn> findByUser(User user);
}