import './App.css';
import CreateItem from './components/itemAdd';
import RecordList from './components/items';
import CRecordList from './components/clientSide/itemList';
import { Route,Routes } from "react-router-dom";
import Record from './components/clientSide/itemList';
import NavBar from './components/navBar';
import Home from './components/clientSide/Home';
import Items from './components/clientSide/itemList';
import Item from './components/clientSide/Item';


function App() {
  return (
    <div>

    <NavBar/>  

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/items" element={<Items/>}/>
    <Route exact path="/items/:id" element={<Item/>}/>
    </Routes>
    
    </div>
  ) 
  }

export default App;
