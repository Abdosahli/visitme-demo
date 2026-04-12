import React from "react";
import "./Booking.css";
import { FaTimes } from "react-icons/fa";

const Booking = ({ open, setOpen }) => {

if (!open) return null;

return (

<div className="booking-overlay" onClick={() => setOpen(false)}>

<div
className="booking-card"
onClick={(e)=> e.stopPropagation()}
>

{/* HEADER */}

<div className="booking-header">

<h2 className="booking-title">Restaurant Booking</h2>

<button
className="booking-close"
onClick={() => setOpen(false)}
>
<FaTimes/>
</button>

</div>


{/* FORM */}

<div className="booking-form">

<input
className="booking-input"
placeholder="Full Name"
/>

<input
className="booking-input"
placeholder="Phone"
/>

<input
className="booking-input"
type="date"
/>

<input
className="booking-input"
type="time"
/>

<input
className="booking-input"
type="number"
placeholder="Guests"
/>

</div>


{/* ACTIONS */}

<div className="booking-actions">

<button className="booking-btn">
Confirm Booking
</button>

<button
className="booking-cancel"
onClick={()=>setOpen(false)}
>
Cancel
</button>

</div>

</div>
</div>

);

};

export default Booking;