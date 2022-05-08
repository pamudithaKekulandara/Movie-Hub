import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function CreateItem() {
 const [form, setForm] = useState({
   itemName: "",
   unitPrice: "",
   quantity: "",
   description:"",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newItem = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newItem),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ itemName: "", unitPrice: "", quantity: "",description:"" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="container">
     <h3>Add New Item</h3>
     <form onSubmit={onSubmit}>
         
       <div className="form-group">
         <label htmlFor="itemName">Item Name</label>
         <input
           type="text"
           className="form-control"
           id="itemName"
           value={form.itemName}
           onChange={(e) => updateForm({ itemName: e.target.value})}
         />
       </div>
       <div className="form-group">
         <label htmlFor="unitPrice">Unit price</label>
         <input
           type="number"
           className="form-control"
           id="unitPrice"
           value={form.unitPrice}
           onChange={(e) => updateForm({ unitPrice: e.target.value})}
         />
       </div>

       <div className="form-group">
         <label htmlFor="quantity">Quantity</label>
         <input
           type="number"
           className="form-control"
           id="quantity"
           value={form.quantity}
           onChange={(e) => updateForm({ quantity: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="description">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({description: e.target.value})}
         />
       </div>

       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 )
}