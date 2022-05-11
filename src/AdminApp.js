import './App.css';
import { Route,Routes } from "react-router-dom";
import Addmovie from './components/movie/Addmovie';
import Dismovie from './components/movie/Dismovie';
import Updatemovie from './components/movie/Updatemovie';



export default function BackendApp() {
  return (
    <div> 
    <Routes>
    <Route exact path="/addmovie" element={<Addmovie/>}/>
    <Route exact path="/dismovie" element={<Dismovie/>}/>
    <Route exact path="/edit/:id" element={<Updatemovie/>}/>

    </Routes>
    
    </div>
  ) 
  }


