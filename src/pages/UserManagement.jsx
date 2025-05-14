// pages/UserManagement.jsx
const UserManagement = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Sam Green", email: "sam@example.com", role: "Viewer" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <table className="w-full text-left text-sm">
        <thead className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserManagement;
