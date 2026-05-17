// src/pages/admin/ReportsPage.jsx

function ReportsPage() {
  // Demo report data
  const reportData = {
    totalEmployees: 125,
    goalsSubmitted: 98,
    approvedGoals: 85,
    pendingApprovals: 13,
    checkInCompletion: 74,
    approvalRate: 87,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Organization Reports
        </h1>

        <p className="text-gray-500 mb-8">
          Overview of goal management and performance metrics.
        </p>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Employees */}
          <div className="bg-blue-50 rounded-xl p-6">
            <p className="text-sm text-gray-500">Total Employees</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {reportData.totalEmployees}
            </p>
          </div>

          {/* Goals Submitted */}
          <div className="bg-purple-50 rounded-xl p-6">
            <p className="text-sm text-gray-500">Goals Submitted</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {reportData.goalsSubmitted}
            </p>
          </div>

          {/* Approved Goals */}
          <div className="bg-green-50 rounded-xl p-6">
            <p className="text-sm text-gray-500">Approved Goals</p>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {reportData.approvedGoals}
            </p>
          </div>

          {/* Pending Approvals */}
          <div className="bg-yellow-50 rounded-xl p-6">
            <p className="text-sm text-gray-500">Pending Approvals</p>
            <p className="text-4xl font-bold text-yellow-600 mt-2">
              {reportData.pendingApprovals}
            </p>
          </div>

          {/* Check-In Completion */}
          <div className="bg-orange-50 rounded-xl p-6">
            <p className="text-sm text-gray-500">
              Check-In Completion
            </p>
            <p className="text-4xl font-bold text-orange-600 mt-2">
              {reportData.checkInCompletion}%
            </p>
          </div>

          {/* Approval Rate */}
          <div className="bg-pink-50 rounded-xl p-6">
            <p className="text-sm text-gray-500">Approval Rate</p>
            <p className="text-4xl font-bold text-pink-600 mt-2">
              {reportData.approvalRate}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;