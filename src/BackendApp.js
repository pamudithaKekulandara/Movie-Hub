import './App.css';
import { Route,Routes } from "react-router-dom";
import Addmovie from './components/movie/Addmovie';


export default function BackendApp() {
  return (
    <div> 
    <Routes>
    <Route exact path="/addmovie" element={<Addmovie/>}/>
    </Routes>
    
    </div>
  ) 
  }


