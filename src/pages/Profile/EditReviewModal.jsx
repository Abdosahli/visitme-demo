import { FaTimes } from "react-icons/fa";
import "./ActivityModal.css";

const EditReviewModal = ({ review, setEditOpen, saveReview }) => {

if(!review) return null;

const handleSubmit = (e)=>{
e.preventDefault();

const updated = {
...review,
comment: e.target.comment.value,
rating: e.target.rating.value
};

saveReview(updated);
};

return(

<div className="modal-overlay" onClick={()=>setEditOpen(null)}>

<div
className="modal-card"
onClick={(e)=>e.stopPropagation()}
>

<div className="modal-header1">

<h2 className="modaltitle">Edit Review</h2>

<button
className="modal-close"
onClick={()=>setEditOpen(null)}
>
<FaTimes/>
</button>

</div>

<form className="modal-form" onSubmit={handleSubmit}>

<input
className="form-input"
defaultValue={review.restaurant}
disabled
/>

<input
name="rating"
className="form-input"
defaultValue={review.rating}
/>

<textarea
name="comment"
className="form-input textarea"
defaultValue={review.comment}
/>

<div className="modal-actions">

<button className="btn-save">
Save
</button>

<button
type="button"
className="btn-cancel"
onClick={()=>setEditOpen(null)}
>
Cancel
</button>

</div>

</form>

</div>

</div>

);

};

export default EditReviewModal;