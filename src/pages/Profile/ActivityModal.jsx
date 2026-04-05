import { useState } from "react";
import { FaTimes, FaTrash, FaEdit, FaEye, FaHeartBroken } from "react-icons/fa";
import EditReviewModal from "./EditReviewModal";
import ConfirmModal from "./ConfirmModal";
import "./ActivityModal.css";

const ActivityModal = ({ type, setOpen }) => {

  if(!type) return null;

  /* DATA */
  const [reviews,setReviews] = useState([
    { id:1, restaurant:"La Casa", rating:5, comment:"Amazing food"},
    { id:2, restaurant:"Ocean View", rating:4, comment:"Nice place"}
  ]);

  const [bookings,setBookings] = useState([
    { id:1, restaurant:"Sky Lounge", date:"12 Mar 2026", guests:2},
    { id:2, restaurant:"Golden Fish", date:"20 Mar 2026", guests:4}
  ]);

  const [favorites,setFavorites] = useState([
    { id:1, restaurant:"La Terraza", city:"Tangier"},
    { id:2, restaurant:"Ocean View", city:"Tetouan"}
  ]);

  /* MODALS */
  const [editOpen,setEditOpen] = useState(null);
  const [confirm,setConfirm] = useState(null);
  const [success,setSuccess] = useState(false);

  /* ACTIONS */
  const askDelete = (type,id)=>{
    setConfirm({type,id});
  };

  const confirmDelete = ()=>{
    if(confirm.type === "review"){
      setReviews(reviews.filter(r=>r.id !== confirm.id));
    }
    if(confirm.type === "booking"){
      setBookings(bookings.filter(b=>b.id !== confirm.id));
    }
    if(confirm.type === "favorite"){
      setFavorites(favorites.filter(f=>f.id !== confirm.id));
    }
    setConfirm(null);
    setSuccess(true);
  };

  const editReview = (review)=>{
    setEditOpen(review);
  };

  const saveReview = (updated)=>{
    setReviews(
      reviews.map(r => r.id === updated.id ? updated : r)
    );
    setEditOpen(null);
  };

  const viewRestaurant = (name)=>{
    alert("Open restaurant page: " + name);
  };

  return(
    <>
      {/* ACTIVITY MODAL */}
      <div className="modal-overlay" onClick={()=>setOpen(null)}>
        <div className="modal-card2" onClick={(e)=>e.stopPropagation()}>
          <div className="modal-header1">
            <h2 className="modaltitle">My Activity</h2>
            <button className="modal-close" onClick={()=>setOpen(null)}>
              <FaTimes/>
            </button>
          </div>

          <div className="modal-table">
            {/* REVIEWS */}
            {type === "reviews" && (
              <table>
                <thead>
                  <tr>
                    <th>Restaurant</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((r)=>(
                    <tr key={r.id}>
                      <td>{r.restaurant}</td>
                      <td>{r.rating}⭐</td>
                      <td>{r.comment}</td>
                      <td>
                        <div className="action-container">
                          <FaEdit className="action-icon" onClick={()=>editReview(r)}/>
                          <FaTrash className="action-icon delete" onClick={()=>askDelete("review",r.id)}/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* BOOKINGS */}
            {type === "bookings" && (
              <table>
                <thead>
                  <tr>
                    <th>Restaurant</th>
                    <th>Date</th>
                    <th>Guests</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b)=>(
                    <tr key={b.id}>
                      <td>{b.restaurant}</td>
                      <td>{b.date}</td>
                      <td>{b.guests}</td>
                      <td>
                        <div className="action-container">
                          <FaEye className="action-icon" onClick={()=>viewRestaurant(b.restaurant)}/>
                          <FaTrash className="action-icon delete" onClick={()=>askDelete("booking",b.id)}/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* FAVORITES */}
            {type === "favorites" && (
              <table>
                <thead>
                  <tr>
                    <th>Restaurant</th>
                    <th>City</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map((f)=>(
                    <tr key={f.id}>
                      <td>{f.restaurant}</td>
                      <td>{f.city}</td>
                      <td>
                        <div className="action-container">
                          <FaEye className="action-icon" onClick={()=>viewRestaurant(f.restaurant)}/>
                          <FaHeartBroken className="action-icon delete" onClick={()=>askDelete("favorite",f.id)}/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* EDIT REVIEW MODAL */}
      <EditReviewModal
        review={editOpen}
        setEditOpen={setEditOpen}
        saveReview={saveReview}
      />

      {/* CONFIRM DELETE */}
      <ConfirmModal
        message={confirm}
        success={success}
        onConfirm={confirmDelete}
        onCancel={()=>{
          setConfirm(null);
          setSuccess(false);
        }}
      />
    </>
  );
};

export default ActivityModal;