import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin"; // or AdminLogin.jsx if renamed
import Dashboard from "./pages/Dashboard";
import AdminDash from "./components/AdminDash";
import Auth from "./pages/Auth";

const PrivateRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/admin-login" />;
};

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLogin/>} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Auth/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin-dashboard" element={<AdminDash/>}/>

      </Routes>
    </>
  );
}

export default App;

