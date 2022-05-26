import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Updatemovie() {
  const [form, setForm] = useState({
    theatername: "",
    nosheets: "",
    place: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/theater/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const theater = await response.json();
      if (!theater) {
        window.alert(`Theater with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(theater);
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
    console.log("dd");
    const editedMovie = {
        theatername: form.theatername,
        nosheets: form.nosheets,
        place: form.place,
        description: form.description,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/theater/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/distheater");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="container">
      <h3>Update Movie</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="theatername">Theater Name</label>
          <input
            type="text"
            className="form-control"
            id="theatername"
            value={form.theatername}
            onChange={(e) => updateForm({ theatername: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nosheets">Number of Sheets</label>
          <input
            type="number"
            className="form-control"
            id="nosheets"
            value={form.nosheets}
            onChange={(e) => updateForm({ nosheets: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="place">Place</label>
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

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">Update</button> */}
      </form>
    </div>
  );
}
