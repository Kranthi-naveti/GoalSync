// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ProtectedRoute from '../components/common/ProtectedRoute';

// Employee Pages
import EmployeeDashboard from '../pages/employee/EmployeeDashboard';
import CreateGoalPage from '../pages/employee/CreateGoalPage';
import GoalSheetPage from '../pages/employee/GoalSheetPage';
import CheckInPage from '../pages/employee/CheckInPage';

// Manager Pages
import ManagerDashboard from '../pages/manager/ManagerDashboard';
import ApprovalPage from '../pages/manager/ApprovalPage';
import TeamCheckInPage from '../pages/manager/TeamCheckInPage';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import ReportsPage from '../pages/admin/ReportsPage';
import AuditLogPage from '../pages/admin/AuditLogPage';
import CycleManagementPage from '../pages/admin/CycleManagementPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {/* Public Routes */}
      <Route path="/" element={<RegisterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
        {/* Employee Routes */}
        <Route
          path="/employee/dashboard"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/goals/create"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <CreateGoalPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/goals"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <GoalSheetPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/checkins"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <CheckInPage />
            </ProtectedRoute>
          }
        />

        {/* Manager Routes */}
        <Route
          path="/manager/dashboard"
          element={
            <ProtectedRoute allowedRoles={['manager']}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/approvals"
          element={
            <ProtectedRoute allowedRoles={['manager']}>
              <ApprovalPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/checkins"
          element={
            <ProtectedRoute allowedRoles={['manager']}>
              <TeamCheckInPage />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <ReportsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/audit-logs"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AuditLogPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/cycles"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <CycleManagementPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;