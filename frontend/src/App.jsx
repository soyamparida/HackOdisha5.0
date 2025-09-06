import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AdminDash from "./components/AdminDash";
import Auth from "./pages/Auth";
import Verify from "./pages/Verify";

// ✅ Protect Admin route
const PrivateRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/admin-login" />;
};

function App() {
  const location = useLocation();

  // ✅ Only show header if current path is exactly "/" or "/verify"
  const showHeader = location.pathname === "/" || location.pathname === "/verify";

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDash />} />
        {/* ✅ Catch-all route -> redirect to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
