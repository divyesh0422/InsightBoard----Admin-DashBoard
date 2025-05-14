 // components/Chart/RevenueVsExpensesChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 5000, expenses: 2210 },
  { name: 'Apr', revenue: 6000, expenses: 2290 },
  { name: 'May', revenue: 7000, expenses: 2000 },
  { name: 'Jun', revenue: 8000, expenses: 4000 },
];

const RevenueVsExpensesChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Revenue vs Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#4f46e5" />
          <Bar dataKey="expenses" fill="#fbbf24" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueVsExpensesChart;
