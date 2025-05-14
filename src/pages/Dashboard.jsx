// pages/Dashboard.jsx
import RevenueChart from "../components/Chart/RevenueChart";
import UserActivityChart from "../components/Chart/UserActivityChart";
import TaskProgressChart from "../components/Chart/TaskProgressChart";

const Dashboard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <RevenueChart />
      <UserActivityChart />
      <TaskProgressChart />
    </section>
  );
};

export default Dashboard;
