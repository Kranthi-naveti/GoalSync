// src/pages/admin/AdminDashboard.jsx

import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-purple-600">
              GoalSync
            </h1>
            <p className="text-sm text-gray-500">
              Admin Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name || 'Admin'} 👋
          </h2>

          <p className="text-gray-600 mb-6">
            Monitor organization-wide goal management and performance cycles.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mt-6">
            <button
              onClick={() => navigate('/admin/reports')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Reports
            </button>

            <button
              onClick={() => navigate('/admin/audit-logs')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Audit Logs
            </button>

            <button
              onClick={() => navigate('/admin/cycles')}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
            >
              Cycle Management
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Total Employees</p>
              <p className="text-3xl font-bold text-blue-600">125</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Goals Submitted</p>
              <p className="text-3xl font-bold text-purple-600">98</p>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Approval Rate</p>
              <p className="text-3xl font-bold text-green-600">87%</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Check-In Completion</p>
              <p className="text-3xl font-bold text-orange-600">74%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;