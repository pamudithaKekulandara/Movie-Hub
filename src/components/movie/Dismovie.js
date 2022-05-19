import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Movie = (props) => (
 <tr>
   <td>{props.movie.moviename}</td>
   <td>{props.movie.ticketprice}</td>
   <td>{props.movie.genress}</td>
   <td>{props.movie.showtime}</td>
   <td>{props.movie.description}</td>
   <td>{props.movie.cast}</td>
   <td>{props.movie.banner}</td>
   <td>
   <Link className="btn btn-link" to={`/edit/${props.movie._id}`}>Edit</Link> |
   <button className="btn btn-link"
       onClick={() => {
         props.deleteMovie(props.movie._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function Dismovie() {
 const [movies, setMovies] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {

  const loggedInUser = localStorage.getItem("user");
  
   async function getMovies() {
     const response = await fetch(`http://localhost:5000/movie/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const movies = await response.json();
     setMovies(movies);
   }
 
   getMovies();
 
   return;
 }, [movies.length]);
 
 //This method will delete a record
 async function deleteMovie(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newMovies = movies.filter((el) => el._id !== id);
   setMovies(newMovies);
 }
 
// This method will map out the records on the table
 function movieList() {
   return movies.map((movie) => {
     return (
       <Movie
         movie={movie}
         deleteMovie={() => deleteMovie(movie._id)}
         key={movie._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
     <center>
            <div>
            <li class="nav-item">
          <a class="nav-link" href="/addmovie">ADDform</a>
        </li>
     <h3>MovieList</h3>
     <table className="table table-striped" style={{ marginTop: 50, width:700 }}>
       <thead>
         <tr>
           <th>Movie Name</th>
           <th>Price</th>
           <th>Genress</th>
           <th>Showtime</th>
           <th>Description</th>
           <th>Cast</th>
           <th>Banner</th>
         </tr>
       </thead>
       <tbody>{movieList()}</tbody>
     </table>
   </div>
     </center>
   
 );
}