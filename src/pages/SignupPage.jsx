import React, { useState } from "react";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock } from "react-icons/fi";
import logo from "../assets/logo.png";
import "../styles/login.css";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="VisitMe Logo" className="logo-image" />
        </div>

        {/* Title */}
        <div className="welcome-container">
          <h1 className="welcome-title">Create Your Account</h1>
          <p className="welcome-subtitle">
            Join VisitMe and discover the best places
          </p>
        </div>

        {/* Form */}
        <div className="form-container">
          <form className="login-form">

            {/* Full Name */}
            <div className="input-container">
              <label className="input-label">Full Name</label>
              <div className="password-wrapper">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full Name"
                />
                <FiUser className="eye-icon" />
              </div>
            </div>

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

            {/* Confirm Password */}
            <div className="input-container">
              <label className="input-label">Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="form-input"
                  placeholder="Confirm Password"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>

            {/* Button */}
            <button type="submit" className="login-btn">
              Sign Up
            </button>

          </form>
        </div>

        {/* Footer */}
        <div className="signup-container">
          <p className="signup-text">
            Already have an account?
            <a href="/login" className="signup-link"> Log In</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
