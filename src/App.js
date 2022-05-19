import "./App.css";
import { Route, Routes } from "react-router-dom";
import Record from "./components/clientSide/movieList";
import NavBar from "./components/navBar";
import Home from "./components/clientSide/Home";
import Items from "./components/clientSide/movieList";
import Movie from "./components/clientSide/movie";
import Addmovie from "./components/movie/Addmovie";
import Dismovie from "./components/movie/Dismovie";
import CusApp from "./CusApp";
import AdminApp from "./AdminApp";
import Register from "./components/loginSignup/registartion";
import LoginFun from "./components/loginSignup/login";
import { useEffect, useState } from "react";
import LogedNavBar from "./components/logedNavBar";

function App() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser != null) {
    
    }
  }, []);

  
      if(localStorage.getItem("user")==null){
        return(
          <div><NavBar />
          <Routes>
        <Route exact path="/customer" element={<CusApp/>}/>
        <Route exact path="/admin" element={<AdminApp/>}/>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/login" element={<LoginFun />} />
        {/* <Route exact path="/customer" element={<CusApp/>}/>
    <Route exact path='admin' element={<AdminApp/>}/> */}
      </Routes>
          
          </div>    
        )
      }
      else{
        return(
          <div>
        <LogedNavBar/>
        
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/login" element={<LoginFun />} />
        {/* <Route exact path="/customer" element={<CusApp/>}/>
    <Route exact path='admin' element={<AdminApp/>}/> */}
      </Routes>



    </div>
  )
}
}
export default App;
