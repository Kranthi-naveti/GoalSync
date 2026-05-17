// src/pages/manager/ApprovalPage.jsx

import { useEffect, useState } from 'react';

function ApprovalPage() {
  const [goals, setGoals] = useState([]);
  const [approvalStatus, setApprovalStatus] = useState('Pending');

  // Load employee goals from localStorage
  useEffect(() => {
    const savedGoals = localStorage.getItem('employeeGoals');

    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }

    const savedStatus = localStorage.getItem('goalApprovalStatus');

    if (savedStatus) {
      setApprovalStatus(savedStatus);
    }
  }, []);

  // Update approval status
  const updateStatus = (status) => {
    setApprovalStatus(status);
    localStorage.setItem('goalApprovalStatus', status);

    alert(`Goals ${status.toLowerCase()} successfully!`);
  };

  // No goals available
  if (goals.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-lg">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">
            Goal Approvals
          </h1>

          <p className="text-gray-600">
            No employee goals found.
          </p>
        </div>
      </div>
    );
  }

  const totalWeightage = goals.reduce(
    (sum, goal) => sum + (Number(goal.weightage) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Goal Approvals
        </h1>

        <p className="text-gray-500 mb-6">
          Review employee goals and approve or reject them.
        </p>

        {/* Status Badge */}
        <div className="mb-6">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              approvalStatus === 'Approved'
                ? 'bg-green-100 text-green-700'
                : approvalStatus === 'Rejected'
                ? 'bg-red-100 text-red-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            Status: {approvalStatus}
          </span>
        </div>

        {/* Goals Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Target</th>
                <th className="px-4 py-3 text-left">UoM</th>
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
                  <td className="px-4 py-3">{goal.target}</td>
                  <td className="px-4 py-3">{goal.uom}</td>
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
            Total Weightage: {totalWeightage}%
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={() => updateStatus('Approved')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Approve Goals
          </button>

          <button
            onClick={() => updateStatus('Rejected')}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Reject Goals
          </button>

          <button
            onClick={() => updateStatus('Pending')}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            Reset Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalPage;