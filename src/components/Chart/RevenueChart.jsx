// components/Chart/RevenueChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "../../data/dummyData";

const RevenueChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Revenue</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={revenueData}>
        <XAxis dataKey="month" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
