// layouts/DashboardLayout.jsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

const DashboardLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex min-h-screen bg-black-100  text-gray-800 dark:text-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-64 flex flex-col flex-1 p-6 space-y-4">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
