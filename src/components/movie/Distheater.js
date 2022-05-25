import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Theater = (props) => (
  <tr>
    <td>{props.theater.theatername}</td>
    <td>{props.theater.nosheets}</td>
    <td>{props.theater.place}</td>
    <td>{props.theater.description}</td>
    <td>
   <Link className="btn btn-link" to={`/tedit/${props.theater._id}`}>
     Edit</Link>{" "} |
   <button className="btn btn-link"
       onClick={() => {
         props.deleteTheater(props.theater._id);
       }}
     >
       Delete
     </button>
   </td>
  </tr>
);

export default function Distheater() {
  const [theaters, setTheater] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getTheater() {
      const response = await fetch(`http://localhost:5000/theater/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const theater = await response.json();
      setTheater(theater);
    }

    getTheater();

    return;
  }, [theaters.length]);

  // This method will delete a record
   async function deleteTheater(id) {
     await fetch(`http://localhost:5000/the/${id}`, {
       method: "DELETE",
     });

     const newTheater = theaters.filter((el) => el._id !== id);
     setTheater(newTheater);
   }

  // This method will map out the records on the table
  function theaterList() {
    return theaters.map((theater) => {
      return (
        <Theater
          theater={theater}
           deleteTheater={() => deleteTheater(theater._id)}
           key={theater._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <center>
              <Link to = "/admin">
    <button className="btn btn-primary">Home</button>
    </Link>
    <Link to = "/addtheater">
    <button className="btn btn-primary">Add New Theater</button>
    </Link>
      <div>
        <h3 style={{ marginTop: 20}}>TheaterList</h3>
        <table
          className="table table-striped"
          style={{ marginTop: 20, width: 700 }}
        >
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Number of sheets</th>
              <th>place</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{theaterList()}</tbody>
        </table>
      </div>
    </center>
  );
}
