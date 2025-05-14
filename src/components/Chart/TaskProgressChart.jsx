// components/Chart/TaskProgressChart.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { taskData } from "../../data/dummyData";

const COLORS = ["#3b82f6", "#f59e0b", "#ef4444"];

const TaskProgressChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Task Progress</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={taskData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {taskData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default TaskProgressChart;
