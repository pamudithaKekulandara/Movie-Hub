import "./Admin.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function Addmovie() {
  const [form, setForm] = useState({
    moviename: "",
    ticketprice: "",
    threater: "",
    genress: "",
    showtime: "",
    description: "",
    cast: "",
    banner: "",
  });
console.log(form.threater);

  const navigate = useNavigate();

     
const [theaters, setTheaters] = useState([]);

useEffect(() => {
      async function getTheaters() {
       const responseu = await fetch(`http://localhost:5000/theater/`);
        const theaters = await responseu.json();
        setTheaters(theaters);
      }
      getTheaters();     
    return;
  },);



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
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      moviename: "",
      ticketprice: "",
      threater: "",
      genress: "",
      showtime: "",
      description: "",
      cast: "",
      banner: "",
    });
    alert("successfully Added movie.....");
    navigate("/addmovie");
  }

  // This following section will display the form that takes the input from the user.
  return (
 <div>
   <div className="nav">
   <Link to = "/admin">
    <button className="btn btn-primary">Home</button>
    </Link>
    <Link to = "/dismovie">
    <button className="btn btn-primary">Movies</button>
    </Link>
   </div>
   
      <div className=" form">
        <h3 className="navi">Add New Movie</h3>
        <div className="forminit">
        <form onSubmit={onSubmit} >
          <div className="form-group">
            <label htmlFor="itemName">Movie Name</label>
            <input
              type="text"
              className="form-control"
              id="moviename"
              value={form.moviename}
              onChange={(e) => updateForm({ moviename: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="unitPrice">Ticket Price</label>
            <input
              type="number"
              className="form-control"
              id="ticketprice"
              value={form.ticketprice}
              onChange={(e) => updateForm({ ticketprice: e.target.value })}
            />
          </div>

          <div className="form-group">
          <label htmlFor="theatername">Theater Name</label>
          <select class="form-select" aria-label="Default select example" id="threater" value={form.threater} onChange={(e) => updateForm({ threater: e.target.value })} >
          {                          
              theaters.map(u=>(
              <option value={u.theatername}>{u.theatername}</option>
              ))}
          </select>
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
              onChange={(e) => updateForm({ showtime: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Cast</label>
            <input
              type="text"
              className="form-control"
              id="cast"
              value={form.cast}
              onChange={(e) => updateForm({ cast: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Banner</label>
            <input
              type="text"
              className="form-control"
              id="banner"
              value={form.banner}
              onChange={(e) => updateForm({ banner: e.target.value })}
            />
          </div>
          <center>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </center>
        </form>
        </div>
      </div>
      </div>
  );
}
