// src/pages/manager/TeamCheckInPage.jsx

import { useEffect, useState } from 'react';

function TeamCheckInPage() {
  const [goals, setGoals] = useState([]);
  const [employeeCheckIns, setEmployeeCheckIns] = useState([]);
  const [managerComments, setManagerComments] = useState([]);

  // Load goals and employee check-ins from localStorage
  useEffect(() => {
    const savedGoals = localStorage.getItem('employeeGoals');
    const savedCheckIns = localStorage.getItem('employeeCheckIns');
    const savedComments = localStorage.getItem('managerComments');

    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }

    if (savedCheckIns) {
      setEmployeeCheckIns(JSON.parse(savedCheckIns));
    }

    if (savedComments) {
      setManagerComments(JSON.parse(savedComments));
    }
  }, []);

  // Update manager comment
  const handleCommentChange = (index, value) => {
    const updatedComments = [...managerComments];
    updatedComments[index] = value;
    setManagerComments(updatedComments);
  };

  // Save comments
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      'managerComments',
      JSON.stringify(managerComments)
    );

    alert('Manager comments saved successfully!');
  };

  // No check-ins found
  if (goals.length === 0 || employeeCheckIns.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-lg">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">
            Team Check-Ins
          </h1>

          <p className="text-gray-600">
            No employee check-ins found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Team Check-Ins
        </h1>

        <p className="text-gray-500 mb-6">
          Review employee achievements and add manager comments.
        </p>

        <form onSubmit={handleSubmit}>
          {goals.map((goal, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 mb-6 bg-gray-50"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {goal.title}
              </h2>

              <div className="space-y-2 text-gray-600 mb-4">
                <p>
                  Target: <strong>{goal.target}</strong>
                </p>
                <p>
                  Achievement:{' '}
                  <strong>
                    {employeeCheckIns[index]?.achievement || '-'}
                  </strong>
                </p>
                <p>
                  Status:{' '}
                  <strong>
                    {employeeCheckIns[index]?.status || '-'}
                  </strong>
                </p>
                <p>
                  Employee Comment:{' '}
                  <strong>
                    {employeeCheckIns[index]?.comment || '-'}
                  </strong>
                </p>
              </div>

              {/* Manager Comment */}
              <textarea
                rows="3"
                placeholder="Enter manager feedback"
                value={managerComments[index] || ''}
                onChange={(e) =>
                  handleCommentChange(index, e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Save Manager Comments
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeamCheckInPage;