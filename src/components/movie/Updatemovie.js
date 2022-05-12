import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Updatemovie() {
 const [form, setForm] = useState({
   moviename: "",
   ticketprice: "",
   genress: "",
   showtime:"",
   description:"",
   cast:"",
   banner:"",
 });
 const params = useParams();
 const navigate = useNavigate();


 useEffect(() => {
  async function fetchData() {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:5000/movie/${params.id.toString()}`);

    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const movie = await response.json();
    if (!movie) {
      window.alert(`Movie with id ${id} not found`);
      navigate("/");
      return;
    }

    setForm(movie);
  }

  fetchData();

  return;
}, [params.id, navigate]);
 
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
   async function onSubmit(e) {
    e.preventDefault();
    const editedMovie = {
    moviename: form.moviename,
    ticketprice: form. ticketprice,
    genress: form. genress,
    showtime: form.showtime,
    description: form.description,
    cast: form.cast,
    banner: form.banner,
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedMovie),
      headers: {
        'Content-Type': 'application/json'
      },
    });
 
    navigate("/dismovie");
    }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div className="container">
    <h3>Update Movie</h3>
    <form onSubmit={onSubmit} >
        
      <div className="form-group">
        <label htmlFor="moviename">Movie Name</label>
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
          value={form.banner }
          onChange={(e) => updateForm({   banner: e.target.value})}
        />
      </div>
      <button  onClick={onSubmit} class="btn btn-primary">Update</button>
    </form>
  </div>
)
}