// pages/Analytics.jsx
import RevenueChart from "../components/Chart/RevenueChart";
import UserActivityChart from "../components/Chart/UserActivityChart";

const Analytics = () => {
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueChart />
        <UserActivityChart />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Insights</h2>
        <p className="text-gray-700 dark:text-gray-300">
          In-depth performance analytics and trends will be displayed here. You can later integrate APIs to fetch dynamic data for a comprehensive overview.
        </p>
      </div>
    </section>
  );
};

export default Analytics;
