// src/pages/admin/AuditLogPage.jsx

function AuditLogPage() {
  // Demo audit log entries
  const auditLogs = [
    {
      id: 1,
      timestamp: '2026-05-17 10:00 AM',
      user: 'demo.employee@company.com',
      role: 'Employee',
      action: 'Created Goal Sheet',
      status: 'Success',
    },
    {
      id: 2,
      timestamp: '2026-05-17 11:15 AM',
      user: 'demo.employee@company.com',
      role: 'Employee',
      action: 'Submitted Quarterly Check-In',
      status: 'Success',
    },
    {
      id: 3,
      timestamp: '2026-05-17 12:30 PM',
      user: 'demo.manager@company.com',
      role: 'Manager',
      action: 'Approved Goal Sheet',
      status: 'Success',
    },
    {
      id: 4,
      timestamp: '2026-05-17 02:00 PM',
      user: 'demo.manager@company.com',
      role: 'Manager',
      action: 'Added Team Check-In Comments',
      status: 'Success',
    },
    {
      id: 5,
      timestamp: '2026-05-17 03:15 PM',
      user: 'demo.admin@company.com',
      role: 'Admin',
      action: 'Viewed Organization Reports',
      status: 'Success',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Audit Logs
        </h1>

        <p className="text-gray-500 mb-6">
          Track important activities across the GoalSync platform.
        </p>

        {/* Audit Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Timestamp</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Action</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {auditLogs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{log.timestamp}</td>
                  <td className="px-4 py-3">{log.user}</td>
                  <td className="px-4 py-3">{log.role}</td>
                  <td className="px-4 py-3">{log.action}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AuditLogPage;