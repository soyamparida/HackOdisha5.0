import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  // ✅ Handle Google login
  // inside Auth.jsx
const handleGoogleSuccess = (credentialResponse) => {
  const token = credentialResponse.credential;
  const decoded = jwtDecode(token);

  localStorage.setItem("user", JSON.stringify(decoded));
  localStorage.setItem("isAuthenticated", "true");

  setUserInfo(decoded);
  
  // ✅ Go directly to user dashboard
  navigate("/dashboard");
};

const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("user", JSON.stringify({ email: "test@mail.com" }));
  localStorage.setItem("isAuthenticated", "true");

  // ✅ Go directly to user dashboard
  navigate("/dashboard");
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-700 animate-slideUp">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700 animate-fadeIn">
          {isLogin ? "Login" : "Signup"} to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500 text-sm animate-fadeInSlow">
          OR
        </div>

        <div className="flex justify-center animate-fadeInSlow">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Google Login Failed")}
          />
        </div>

        <p className="mt-6 text-center text-sm text-gray-600 animate-fadeInSlow">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline font-medium transition"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth; 