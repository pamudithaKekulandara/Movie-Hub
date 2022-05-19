import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Addtheater() {
  const [form, setForm] = useState({
    theatername: "",
    nosheets: "",
    place: "",
    description: "",
  });
  const navigate = useNavigate();

  //  These methods will update the state properties.
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

    await fetch("http://localhost:5000/theater/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ theatername: "", nosheets: "", place: "", description: "" });
    navigate("/addtheater");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <center>
              <Link to = "/admin">
    <button>Home</button>
    </Link>
    <Link to = "/distheater">
    <button>Theater</button>
    </Link>
      <div className="container">
        <h3>Add New Theater</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Theater Name</label>
            <input
              type="text"
              className="form-control"
              id="theatername"
              value={form.theatername}
              onChange={(e) => updateForm({ theatername: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="unitPrice">Number of Sheets</label>
            <input
              type="number"
              className="form-control"
              id="nosheets"
              value={form.nosheets}
              onChange={(e) => updateForm({ nosheets: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Place</label>
            <input
              type="text"
              className="form-control"
              id="place"
              value={form.place}
              onChange={(e) => updateForm({ place: e.target.value })}
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </center>
  );
}
