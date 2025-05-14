// components/Chart/UserActivityChart.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { userActivityData } from "../../data/dummyData";

const UserActivityChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Weekly Active Users</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={userActivityData}>
        <XAxis dataKey="day" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="activeUsers" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default UserActivityChart;
