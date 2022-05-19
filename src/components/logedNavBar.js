import React from "react";
import { Link } from "react-router-dom";

const LogedNavBar=()=>{

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">MOVIE HUB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/items">Movies</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link" href="/addmovie">Admin</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

      </ul>
      <div className="buttons">
          <Link to={'/login'}>
          <button className="btn btn-outline-dark"
           onClick={localStorage.clear()}
          >
              <i className="fa fa-user-logout ms-2"></i> LogOut</button>
              </Link>
      </div>
      <div className="buttons">
          <a href="" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart ms-2"></i> Cart (0)</a>
      </div>
    </div>
  </div>
</nav>
    )
}
export default LogedNavBar;