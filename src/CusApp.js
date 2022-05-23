import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './components/clientSide/Home'
import Items from './components/clientSide/movieList'
import Movie from './components/clientSide/movie'
import Theaters from './components/clientSide/theater'
import Cart from './components/clientSide/Cart'

function CusApp() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/theater' element={<Theaters />} />
        <Route exact path='/items' element={<Items />} />
        <Route exact path='/movie/:id' element={<Movie />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default CusApp
