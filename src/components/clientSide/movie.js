import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/actions'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import Skeleton from 'react-loading-skeleton'

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  // const [ticketCount, setCount] = useState()

  const dispatch = useDispatch()
  const addProduct = (movie) => {
    dispatch(addCart(movie))
    alert('Successfully Added to the Cart')
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser == null) {
      window.location = '/login'
    }
  }, [])

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true)
      const response = await fetch(`http://localhost:5000/movie/${id}`)
      setMovie(await response.json())
      setLoading(false)
    }
    getMovie()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className='col-md-6'>
          <Skeleton height={400} />
        </div>
        <div className='col-md-6' style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    )
  }

  const ShowItem = () => {
    return (
      <>
        <div className='col-md-6'>
          <img
            src={movie.banner}
            alt={movie.movieName}
            height='400px'
            width='400px'
          />
        </div>
        <div className='col-md-6'>
          <div class='p-4'>
            <h4 className='text-uppercase'>{movie.genress}</h4>
            <h1 className='display-5'>{movie.moviename}</h1>
            <p className='lead'>Cast : {movie.cast}</p>
            <p className='lead'>Description : {movie.description}</p>
            <p className='lead'>Theater : {movie.theater}</p>
            <p className='lead fw-bolder'>Time : {movie.showtime}</p>
            <h3 className='display-6 fw-bold my-4'>{movie.ticketprice} LKR</h3>
            <button
              className='btn btn-dark px-4 py-2 me-2'
              onClick={() => addProduct(movie)}
            >
              Add to Cart
            </button>
            <NavLink to='/cart'>
              <button className='btn btn-dark px-4 py-2'>Go to Cart</button>
            </NavLink>
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className='container'>
        <div className='row py-4'>{loading ? <Loading /> : <ShowItem />}</div>
      </div>
    </div>
  )
}
export default Movie
