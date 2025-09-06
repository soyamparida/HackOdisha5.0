import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  PlusCircle,
  Search,
  HelpCircle,
  Phone,
  UserCog,
  LogOut,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const location = useLocation();
  const navigate = useNavigate();

  // Update login state when route changes
  useEffect(() => {
    setIsAdminLoggedIn(localStorage.getItem("isAdmin") === "true");
  }, [location]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdminLoggedIn(false);
    navigate("/"); // redirect to home
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 tracking-wide">
          <Link to="/">Lost & Found</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Home className="mr-2 h-5 w-5" /> Home
          </Link>

          <Link
            to="/found-report"
            className="flex items-center text-gray-700 hover:text-indigo-600"
          >
            <PlusCircle className="mr-2 h-5 w-5" /> Report Item
          </Link>

          <a href="#workflow" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Search className="mr-2 h-5 w-5" /> How it Works
          </a>
          <a href="#faq" className="flex items-center text-gray-700 hover:text-indigo-600">
            <HelpCircle className="mr-2 h-5 w-5" /> FAQ
          </a>
          <a href="#footer" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Phone className="mr-2 h-5 w-5" /> Contact
          </a>

          {/* Login / Admin */}
          {!isAdminLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-green-500 transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/admin-login"
                className="px-6 py-2 bg-yellow-600 text-white rounded-md shadow hover:bg-yellow-500 transition duration-300"
              >
                Admin Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/admin-dashboard"
                className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500 transition duration-300 flex items-center"
              >
                <UserCog className="mr-2 h-5 w-5" /> Admin
              </Link>

              <button
                onClick={handleLogout}
                className="ml-4 px-6 py-2 bg-gray-700 text-white rounded-md shadow hover:bg-gray-600 transition duration-300 flex items-center"
              >
                <LogOut className="mr-2 h-5 w-5" /> Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;







