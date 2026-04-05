import React from "react";
import { useState } from "react";
import "./Profile.css";
import Navbar from "../../components/Navbar";
import ActivityModal from "./ActivityModal";
import Footer from "../../components/Footer/Footer";
import EditProfileModal from "./EditProfileModal";
const Profile = () => {

  const [open, setOpen] = useState(false);
  const [openActivity,setOpenActivity] = useState(null);


  return (
    <>
      <Navbar />

      <section className="profile-page">
        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="https://i.pravatar.cc/150"
              alt="User"
            />
          </div>

          <div className="profile-info">
            <h1>Abdo Sahli</h1>
            <p>Food Explorer · Marrakech</p>
          </div>
          
        </div>

        {/* Content */}
        <div className="profile-content container">
          {/* Left */}
          <div className="profile-card">
            <div className="profile-card-header">
                <h3>Personal Info</h3>
            </div>
            <div className="simple-info">
  <p>
    <span className="label">Email</span>
    <span className="value">abdo@email.com</span>
  </p>

  <p>
    <span className="label">Phone</span>
    <span className="value">+212 6 00 00 00 00</span>
  </p>

  <p>
    <span className="label">Member since</span>
    <span className="value">2025</span>
  </p>
</div>
 <button className="btn-edit" onClick={() => setOpen(true)}>
              Edit Profile
            </button>
             


          </div>
<EditProfileModal open={open} setOpen={setOpen} />
          {/* Right */}
           
           <div className="profile-card">
          <div className="profile-card-header">
            <h3>My Activity</h3>
          </div>

          <div className="profile-stats">
    <div 
      className="stat-item"
      onClick={()=>setOpenActivity("reviews")}
    >
      <h4>12</h4>
      <span>Reviews</span>
    </div>

            <div 
      className="stat-item"
      onClick={()=>setOpenActivity("bookings")}
    >
      <h4>8</h4>
      <span>Bookings</span>
    </div>

    <div 
      className="stat-item"
      onClick={()=>setOpenActivity("favorites")}
    >
      <h4>5</h4>
      <span>Favorites</span>
    </div>
            
          </div>
        </div>
<ActivityModal 
     type={openActivity}
     setOpen={setOpenActivity}
  />
        </div>
              <Footer />

      </section>

    </>
  );
};

export default Profile;
