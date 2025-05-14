import { useState } from "react";

const TaskProgress = ({ taskName, progress }) => (
  <div className="mb-4">
    <div className="text-sm font-medium text-gray-800 dark:text-white">{taskName}</div>
    <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="h-full rounded-full bg-green-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

const Tasks = () => {
  const tasks = [
    { name: "Task 1", progress: 40 },
    { name: "Task 2", progress: 70 },
    { name: "Task 3", progress: 90 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Tasks</h2>
      {tasks.map((task) => (
        <TaskProgress key={task.name} taskName={task.name} progress={task.progress} />
      ))}
    </div>
  );
};

export default Tasks;
