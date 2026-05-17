import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-purple-600">GoalSync</h1>
            <p className="text-sm text-gray-500">Employee Dashboard</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name || 'Employee'} 👋
          </h2>

          <p className="text-gray-600 mb-6">
            Manage your goals and quarterly check-ins from this dashboard.
          </p>

          <button
            onClick={() => navigate('/employee/goals/create')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Create Goals
          </button>
          <button
            onClick={() => navigate('/employee/goals')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          View Goal Sheet
        </button>
        <button
          onClick={() => navigate('/employee/checkins')}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
        >
          Quarterly Check-In
        </button>
        </div>
      </main>
    </div>
  );
}

export default EmployeeDashboard;