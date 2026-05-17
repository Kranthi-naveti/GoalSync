// src/main/java/com/goalsync/service/CheckInService.java

package com.goalsync.service;

import com.goalsync.dto.request.CreateCheckInRequest;
import com.goalsync.dto.response.CheckInResponse;

import java.util.List;

public interface CheckInService {

    /**
     * Create a new quarterly check-in.
     *
     * @param request check-in creation request
     * @return created check-in response
     */
    CheckInResponse createCheckIn(CreateCheckInRequest request);

    /**
     * Retrieve all check-ins.
     *
     * @return list of all check-ins
     */
    List<CheckInResponse> getAllCheckIns();
}