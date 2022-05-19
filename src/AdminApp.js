import './App.css';
import { Route,Routes } from "react-router-dom";
import Addmovie from './components/movie/Addmovie';
import Dismovie from './components/movie/Dismovie';
import Updatemovie from './components/movie/Updatemovie';
import Addtheater from './components/movie/Addtheater';
import Distheater from './components/movie/Distheater';



export default function BackendApp() {
  return (
    <div> 
    <Routes>
    <Route exact path="/addmovie" element={<Addmovie/>}/>
    <Route exact path="/dismovie" element={<Dismovie/>}/>
    <Route exact path="/edit/:id" element={<Updatemovie/>}/>
    <Route exact path="/addtheater" element={<Addtheater/>}/>
    <Route exact path="/distheater" element={<Distheater/>}/>

    </Routes>
    
    </div>
  ) 
  }


