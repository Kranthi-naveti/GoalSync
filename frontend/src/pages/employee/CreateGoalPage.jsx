// src/pages/employee/CreateGoalPage.jsx

import { useEffect, useState } from 'react';

const MAX_GOALS = 8;

function CreateGoalPage() {
  const [goals, setGoals] = useState([
    {
      title: '',
      description: '',
      uom: 'Numeric',
      target: '',
      weightage: '',
    },
  ]);

  // Load saved goals from localStorage when page opens
  useEffect(() => {
    const savedGoals = localStorage.getItem('employeeGoals');

    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  // Update goal field
  const handleChange = (index, field, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index][field] = value;
    setGoals(updatedGoals);
  };

  // Add new goal
  const addGoal = () => {
    if (goals.length >= MAX_GOALS) {
      alert('Maximum 8 goals are allowed.');
      return;
    }

    setGoals([
      ...goals,
      {
        title: '',
        description: '',
        uom: 'Numeric',
        target: '',
        weightage: '',
      },
    ]);
  };

  // Remove goal
  const removeGoal = (index) => {
    if (goals.length === 1) {
      alert('At least one goal is required.');
      return;
    }

    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  // Calculate total weightage
  const totalWeightage = goals.reduce(
    (sum, goal) => sum + (Number(goal.weightage) || 0),
    0
  );

  // Submit goals
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate minimum weightage per goal
    for (const goal of goals) {
      if ((Number(goal.weightage) || 0) < 10) {
        alert('Each goal must have at least 10% weightage.');
        return;
      }
    }

    // Validate total weightage
    if (totalWeightage !== 100) {
      alert('Total weightage must equal 100%.');
      return;
    }

    // Save goals to localStorage
    localStorage.setItem('employeeGoals', JSON.stringify(goals));

    // Success message
    alert('Goals saved successfully!');

    // Debug output
    console.log('Saved Goals:', goals);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Create Goal Sheet
        </h1>

        <p className="text-gray-500 mb-6">
          Add your goals and ensure the total weightage equals 100%.
        </p>

        <form onSubmit={handleSubmit}>
          {goals.map((goal, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 mb-6 bg-gray-50"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Goal {index + 1}
                </h2>

                <button
                  type="button"
                  onClick={() => removeGoal(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Goal Title */}
                <input
                  type="text"
                  placeholder="Goal Title"
                  value={goal.title}
                  onChange={(e) =>
                    handleChange(index, 'title', e.target.value)
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

                {/* Unit of Measurement */}
                <select
                  value={goal.uom}
                  onChange={(e) =>
                    handleChange(index, 'uom', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="Numeric">Numeric</option>
                  <option value="%">Percentage</option>
                  <option value="Timeline">Timeline</option>
                  <option value="Zero">Zero-based</option>
                </select>

                {/* Target */}
                <input
                  type="text"
                  placeholder="Target"
                  value={goal.target}
                  onChange={(e) =>
                    handleChange(index, 'target', e.target.value)
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

                {/* Weightage */}
                <input
                  type="number"
                  placeholder="Weightage (%)"
                  value={goal.weightage}
                  onChange={(e) =>
                    handleChange(index, 'weightage', e.target.value)
                  }
                  min="10"
                  max="100"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* Description */}
              <textarea
                placeholder="Goal Description"
                value={goal.description}
                onChange={(e) =>
                  handleChange(index, 'description', e.target.value)
                }
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-4"
              />
            </div>
          ))}

          {/* Total Weightage */}
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Total Weightage:{' '}
              <span
                className={
                  totalWeightage === 100
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {totalWeightage}%
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={addGoal}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Add Goal
            </button>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Submit Goals
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGoalPage;