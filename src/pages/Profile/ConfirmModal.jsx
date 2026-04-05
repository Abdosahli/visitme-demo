import { FaTimes } from "react-icons/fa";

const ConfirmModal = ({ message, onConfirm, onCancel, success }) => {

if(!message && !success) return null;

return(

<div className="modal-overlay">

<div className="modal-card">

<div className="modal-header1">

<h2 className="modaltitle">
{success ? "Success" : "Confirm Action"}
</h2>

<button
className="modal-close"
onClick={onCancel}
>
<FaTimes/>
</button>

</div>

<div style={{textAlign:"center"}}>

<p style={{marginBottom:"25px"}}>

{success
? "Item deleted successfully ✔"
: "Are you sure you want to delete this item?"
}

</p>

{!success && (

<div className="modal-actions">

<button
className="btn-save"
onClick={onConfirm}
>
Yes Delete
</button>

<button
className="btn-cancel"
onClick={onCancel}
>
Cancel
</button>

</div>

)}

{success && (

<button
className="btn-save"
onClick={onCancel}
>
OK
</button>

)}

</div>

</div>

</div>

);

};

export default ConfirmModal;