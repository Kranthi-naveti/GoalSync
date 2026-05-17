// src/pages/admin/CycleManagementPage.jsx

import { useEffect, useState } from 'react';

function CycleManagementPage() {
  const [cycle, setCycle] = useState({
    name: 'FY 2026 Performance Cycle',
    startDate: '',
    endDate: '',
    status: 'Open',
  });

  // Load saved cycle configuration
  useEffect(() => {
    const savedCycle = localStorage.getItem('performanceCycle');

    if (savedCycle) {
      setCycle(JSON.parse(savedCycle));
    }
  }, []);

  // Update fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCycle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save cycle configuration
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      'performanceCycle',
      JSON.stringify(cycle)
    );

    alert('Performance cycle saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Cycle Management
        </h1>

        <p className="text-gray-500 mb-6">
          Configure the performance cycle settings.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Cycle Name */}
          <input
            type="text"
            name="name"
            placeholder="Cycle Name"
            value={cycle.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          {/* Start Date */}
          <input
            type="date"
            name="startDate"
            value={cycle.startDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          {/* End Date */}
          <input
            type="date"
            name="endDate"
            value={cycle.endDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          {/* Status */}
          <select
            name="status"
            value={cycle.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Save Cycle Configuration
          </button>
        </form>
      </div>
    </div>
  );
}

export default CycleManagementPage;