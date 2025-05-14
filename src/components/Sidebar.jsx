// components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PieChart,
  Users,
  Settings,
  Bell,
  FileText
} from "lucide-react";

const Sidebar = () => {
  const linkStyle = "flex items-center gap-3 p-3 rounded-lg hover:bg-black-600 hover:text-black transition";
  const activeStyle = "bg-blue-600 text-white";

  return (
    <aside className="w-64 bg-white-900 text-black h-screen p-6 fixed">
      <h2 className="text-2xl font-semibold mb-6">InsightBoard</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
          <PieChart size={20} /> Analytics
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
          <Users size={20} /> User Management
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
          <Settings size={20} /> Settings
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
          <Bell size={20} /> Notifications
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
          <FileText size={20} /> Reports
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
