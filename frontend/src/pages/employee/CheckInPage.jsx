// src/pages/employee/CheckInPage.jsx

import { useEffect, useState } from 'react';

function CheckInPage() {
  const [goals, setGoals] = useState([]);
  const [checkIns, setCheckIns] = useState([]);

  // Load goals from localStorage
  useEffect(() => {
    const savedGoals = localStorage.getItem('employeeGoals');

    if (savedGoals) {
      const parsedGoals = JSON.parse(savedGoals);
      setGoals(parsedGoals);

      // Initialize check-ins
      const initialCheckIns = parsedGoals.map(() => ({
        achievement: '',
        status: 'Not Started',
        comment: '',
      }));

      // Load existing check-ins if available
      const savedCheckIns = localStorage.getItem('employeeCheckIns');

      if (savedCheckIns) {
        setCheckIns(JSON.parse(savedCheckIns));
      } else {
        setCheckIns(initialCheckIns);
      }
    }
  }, []);

  // Update check-in fields
  const handleChange = (index, field, value) => {
    const updatedCheckIns = [...checkIns];
    updatedCheckIns[index][field] = value;
    setCheckIns(updatedCheckIns);
  };

  // Save check-ins
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      'employeeCheckIns',
      JSON.stringify(checkIns)
    );

    alert('Quarterly check-in saved successfully!');
    console.log('Saved Check-Ins:', checkIns);
  };

  // No goals available
  if (goals.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-lg">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">
            Quarterly Check-In
          </h1>

          <p className="text-gray-600">
            No goals found. Please create and save goals first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Quarterly Check-In
        </h1>

        <p className="text-gray-500 mb-6">
          Update actual achievements and progress status.
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

              <p className="text-gray-500 mb-4">
                Target: <strong>{goal.target}</strong> | Weightage:{' '}
                <strong>{goal.weightage}%</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Achievement */}
                <input
                  type="text"
                  placeholder="Actual Achievement"
                  value={checkIns[index]?.achievement || ''}
                  onChange={(e) =>
                    handleChange(
                      index,
                      'achievement',
                      e.target.value
                    )
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

                {/* Status */}
                <select
                  value={checkIns[index]?.status || 'Not Started'}
                  onChange={(e) =>
                    handleChange(index, 'status', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="On Track">On Track</option>
                  <option value="Completed">Completed</option>
                </select>

                {/* Comment */}
                <input
                  type="text"
                  placeholder="Comment"
                  value={checkIns[index]?.comment || ''}
                  onChange={(e) =>
                    handleChange(
                      index,
                      'comment',
                      e.target.value
                    )
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Save Check-In
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckInPage;