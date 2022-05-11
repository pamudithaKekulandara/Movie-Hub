import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
 
export default function Addmovie() {
 const [form, setForm] = useState({
   moviename: "",
   ticketprice: "",
   genress: "",
   showtime:"",
   description:"",
   cast:"",
   banner:"",
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
 
   await fetch("http://localhost:5000/movie/add", {
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
 
   setForm({    moviename: "",
   ticketprice: "",
   genress: "",
   showtime:"",
   description:"",
   cast:"",
   banner:""
 });
   navigate("/addmovie");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
     <center>
         <div className="container">

<li class="nav-item">
  <a class="nav-link" href="/dismovie">Movie Table</a>
</li>
<h3>Add New Item</h3>
<form onSubmit={onSubmit}>
 
<div className="form-group">
 <label htmlFor="itemName">Movie Name</label>
 <input
   type="text"
   className="form-control"
   id="moviename"
   value={form.moviename}
   onChange={(e) => updateForm({ moviename: e.target.value})}
 />
</div>
<div className="form-group">
 <label htmlFor="unitPrice">Ticket Price</label>
 <input
   type="number"
   className="form-control"
   id="ticketprice"
   value={form.ticketprice}
   onChange={(e) => updateForm({ ticketprice: e.target.value})}
 />
</div>

<div className="form-group">
 <label htmlFor="quantity">Genress</label>
 <input
   type="text"
   className="form-control"
   id="genress"
   value={form.genress}
   onChange={(e) => updateForm({ genress: e.target.value })}
 />
</div>

<div className="form-group">
 <label htmlFor="description">Showtime</label>
 <input
   type="text"
   className="form-control"
   id="showtime"
   value={form.showtime}
   onChange={(e) => updateForm({showtime: e.target.value})}
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
 <label htmlFor="description">Cast</label>
 <input
   type="text"
   className="form-control"
   id="cast"
   value={form.cast}
   onChange={(e) => updateForm({cast: e.target.value})}
 />
</div>
<div className="form-group">
 <label htmlFor="description">Banner</label>
 <input
   type="text"
   className="form-control"
   id="banner"
   value={form.   banner }
   onChange={(e) => updateForm({   banner: e.target.value})}
 />
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
     </center>
   
 )
}