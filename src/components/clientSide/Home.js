import React from "react";
import Items from "./movieList";


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/images/bg.jpg" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="containner">
            <h5 className="card-title display-3 fw-bolder mb-0">New Movies</h5>
            <p className="card-text lead fs-2">Checkout All The Movies</p>
          </div>
        </div>
      </div>
      <Items />
      {/* <div className='homescreen_products'>
        {loading ? (
          <h2>Loading..</h2>
        ) : error ? (
          <h2>{error} </h2>
        ) : (
          products.map((product) => (
            <Items
              key={product._id}
              movieId={product._id}
              name={product.moviename}
              genress={product.genress}
              banner={product.banner}
              showtime={product.showtime}
              description={product.description}
              theater={product.theater}
              ticketprice={product.ticketprice}
            />
          ))
        )}
      </div> */}
    </div>
  );
};
export default Home;
