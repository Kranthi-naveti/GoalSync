// src/main/java/com/goalsync/repository/GoalRepository.java

package com.goalsync.repository;

import com.goalsync.entity.Goal;
import com.goalsync.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GoalRepository extends JpaRepository<Goal, Long> {

    /**
     * Find all goals that belong to a specific user.
     *
     * @param user the owner of the goals
     * @return list of goals created by the user
     */
    List<Goal> findByUser(User user);
}