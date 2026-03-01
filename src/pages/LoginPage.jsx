import React from "react";
import { useState } from "react";
import { FiEye, FiEyeOff,FiMail } from "react-icons/fi";
import logo from "../assets/logo.png";
import "../styles/login.css";


const LoginPage = () => {


const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-page">
      <div className="login-card">
        
        {/* Logo Section - Minimal spacing */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt="VisitMe Logo" 
            className="logo-image"
          />
        </div>

        {/* Welcome Section - Reduced spacing */}
        <div className="welcome-container">
          <h1 className="welcome-title">Welcome Back</h1>
          <p className="welcome-subtitle">Login to your account</p>
        </div>

        {/* Form Section */}
        <div className="form-container">
          
          <form className="login-form">
             {/* Email */}
            <div className="input-container">
              <label className="input-label">Email Address</label>
                  <div className="password-wrapper">
                    <input
                      type="email"
                         className="form-input"
                         placeholder="Email Address"
                      />
                  <FiMail className="eye-icon" />
              </div>
            </div>
            

            {/* Password */}
            <div className="input-container">
              <label className="input-label">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Password"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>


            <div className="forgot-container">
              <a href="/forgot-password" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
        </div>

        {/* Sign Up Section */}
        <div className="signup-container">
          <p className="signup-text">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">Sign Up</a>
          </p>
        </div>
 

      </div>
    </div>
  );
};

export default LoginPage;