// src/pages/employee/GoalSheetPage.jsx

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GoalSheetPage() {
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();

  // Load saved goals from localStorage
  useEffect(() => {
    const savedGoals = localStorage.getItem('employeeGoals');

    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  // Delete all goals
  const handleClearGoals = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all saved goals?'
    );

    if (!confirmed) return;

    localStorage.removeItem('employeeGoals');
    setGoals([]);
    alert('All goals have been deleted.');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-purple-600 mb-2">
              My Goal Sheet
            </h1>
            <p className="text-gray-500">
              Review all saved goals and their weightages.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button
              onClick={() => navigate('/employee/goals/create')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Edit Goals
            </button>

            <button
              onClick={handleClearGoals}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Goals
            </button>
          </div>
        </div>

        {/* Empty State */}
        {goals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No goals found.
            </p>

            <button
              onClick={() => navigate('/employee/goals/create')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Create Goals
            </button>
          </div>
        ) : (
          <>
            {/* Goals Table */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">#</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left">Description</th>
                    <th className="px-4 py-3 text-left">UoM</th>
                    <th className="px-4 py-3 text-left">Target</th>
                    <th className="px-4 py-3 text-left">Weightage</th>
                  </tr>
                </thead>

                <tbody>
                  {goals.map((goal, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 font-medium">
                        {goal.title}
                      </td>
                      <td className="px-4 py-3">
                        {goal.description || '-'}
                      </td>
                      <td className="px-4 py-3">{goal.uom}</td>
                      <td className="px-4 py-3">{goal.target}</td>
                      <td className="px-4 py-3 font-semibold text-purple-600">
                        {goal.weightage}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <p className="text-lg font-semibold">
                Total Goals: {goals.length}
              </p>

              <p className="text-lg font-semibold text-green-600 mt-1">
                Total Weightage:{' '}
                {goals.reduce(
                  (sum, goal) =>
                    sum + (Number(goal.weightage) || 0),
                  0
                )}
                %
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GoalSheetPage;