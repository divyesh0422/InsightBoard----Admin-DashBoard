// pages/Reports.jsx
const Reports = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Reports</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Here you can download or view monthly and yearly reports. You can also integrate CSV or PDF export in the future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">January 2025</h4>
          <button className="text-blue-600 hover:underline">Download Report</button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">February 2025</h4>
          <button className="text-blue-600 hover:underline">Download Report</button>
        </div>
      </div>
    </section>
  );
};

export default Reports;
