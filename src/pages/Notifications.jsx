// pages/Notifications.jsx
const Notifications = () => {
  const notifications = [
    { id: 1, message: "New user signed up", time: "5 mins ago" },
    { id: 2, message: "Revenue increased by 20%", time: "1 hour ago" },
    { id: 3, message: "Scheduled maintenance at midnight", time: "Yesterday" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-3">
        {notifications.map((note) => (
          <li key={note.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
            <p>{note.message}</p>
            <small className="text-gray-500 dark:text-gray-400">{note.time}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
