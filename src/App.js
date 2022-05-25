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
import Login from "./components/loginSignup/login";
import Addtheater from './components/movie/Addtheater';
import Distheater from './components/movie/Distheater';
import Updatemovie from './components/movie/Updatemovie';
import Updatetheater from './components/movie/Updatetheater';
import { useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Login logout={true} />} />
        <Route exact path="/admin" element={<AdminApp />} />
        <Route exact path="/admin/login" element={<Login admin={true} />} />

        <Route exact path="/addmovie" element={<Addmovie/>}/>
    <Route exact path="/dismovie" element={<Dismovie/>}/>
    <Route exact path="/edit/:id" element={<Updatemovie/>}/>
    <Route exact path="/tedit/:id" element={<Updatetheater/>}/>
    <Route exact path="/addtheater" element={<Addtheater/>}/>
    <Route exact path="/distheater" element={<Distheater/>}/>
        {/* <Route exact path="/customer" element={<CusApp/>}/>
    <Route exact path='admin' element={<AdminApp/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
