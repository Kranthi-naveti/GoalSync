// src/pages/manager/ManagerDashboard.jsx

import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function ManagerDashboard() {
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
              Manager Dashboard
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
            Welcome, {user?.name || 'Manager'} 👋
          </h2>

          <p className="text-gray-600 mb-6">
            Review employee goals and conduct quarterly check-ins.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mt-6">
            <button
              onClick={() => navigate('/manager/approvals')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Review Goal Approvals
            </button>

            <button
              onClick={() => navigate('/manager/checkins')}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
            >
              Team Check-Ins
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Pending Approvals</p>
              <p className="text-3xl font-bold text-blue-600">1</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Pending Check-Ins</p>
              <p className="text-3xl font-bold text-orange-600">1</p>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Team Members</p>
              <p className="text-3xl font-bold text-green-600">5</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManagerDashboard;