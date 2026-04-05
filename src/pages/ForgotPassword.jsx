import React from "react";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import logo from "../assets/logo.png";
import "../styles/login.css";

const ForgotPassword = () => {
  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="VisitMe Logo" className="logo-image" />
        </div>

        {/* Title000555555 */}
        <div className="welcome-container">
          <h1 className="welcome-title">Forgot Password</h1>
          <p className="welcome-subtitle">
            Enter your email to reset your password
          </p>
        </div>

        {/* Form */}
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

            <button type="submit" className="login-btn">
              Send Reset Link
            </button>
          </form>
        </div>

        {/* Back to login */}
        <div className="signup-container">
          <a href="/login" className="back-link">
            <FiArrowLeft /> Back to Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
