import './App.css';
import { Route,Routes } from "react-router-dom";
import Addmovie from './components/movie/Addmovie';
import Dismovie from './components/movie/Dismovie';
import Updatemovie from './components/movie/Updatemovie';
import Addtheater from './components/movie/Addtheater';
import Distheater from './components/movie/Distheater';
import { Link } from 'react-router-dom';



export default function AdminApp() {
  return (
    <div> 
    {/* <Routes>
    <Route exact path="/addmovie" element={<Addmovie/>}/>
    <Route exact path="/dismovie" element={<Dismovie/>}/>
    <Route exact path="/edit/:id" element={<Updatemovie/>}/>
    <Route exact path="/addtheater" element={<Addtheater/>}/>
    <Route exact path="/distheater" element={<Distheater/>}/>
    </Routes> */}
    
    <center>
    <br></br>
    <br></br>
    <br></br>
    <Link to = "/addmovie">
    <button className="btn btn-primary">ADD NEW MOVIES</button>
    </Link>
    <br></br>
    <br></br>
    <Link to = "/addtheater">
    <button className="btn btn-primary">ADD NEW THEATER</button>
    </Link>
    <br></br>
    <br></br>
    <Link to = "/dismovie">
    <button className="btn btn-primary">MOVIES</button>
    </Link>
    <br></br>
    <br></br>
    <Link to = "/distheater">
    <button className="btn btn-primary">THEATER</button>
    </Link>
    </center>

    
    </div>
  ) 
  }


