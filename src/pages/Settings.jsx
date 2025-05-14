// pages/Settings.jsx
const Settings = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      
      <div>
        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
          placeholder="Enter username"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Email Notifications</label>
        <select className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
          <option>Enabled</option>
          <option>Disabled</option>
        </select>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Save Settings
      </button>
    </section>
  );
};

export default Settings;
