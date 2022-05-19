
import Items from "./movieList";
import { useEffect } from "react";

 const Home= () =>{

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

  }, []);

    return(
    <div className="hero">
        <div class="card bg-dark text-white border-0">
  <img src="/images/bg.jpg" class="card-img" alt="Background"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="containner">   
    <h5 class="card-title display-3 fw-bolder mb-0">New Movies</h5>
    <p class="card-text lead fs-2">Checkout All The Movies</p>
  
  </div>
</div>
    </div>
    <Items/>
    </div>

    )
}
export default Home;