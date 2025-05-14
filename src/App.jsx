// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/reports" element={<Reports />} />
          {/* Default route */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
