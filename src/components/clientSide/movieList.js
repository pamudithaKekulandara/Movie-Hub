import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import Movie from './movie'

const Items = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([data])
  const [loading, setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      const response = await fetch(`http://localhost:5000/movie/`)

      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.clone().json())
        setLoading(false)
        console.log(filter)
      }

      return () => {
        componentMounted = false
      }
    }

    getItems()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const filterMovie = (type, moviename) => {
    const updateList = data.filter(
      (x) => x.type === type,
      moviename == moviename
    )
    setFilter(updateList)
  }

  const ShowItems = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterMovie('Romance')}
          >
            Romance
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterMovie('Action')}
          >
            Action
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterMovie('Comedy')}
          >
            Comedy
          </button>

          <input
            type='text'
            placeholder='Search..'
            onChange={() => {
              filterMovie(Movie.moviename)
            }}
          />
          <button onSubmit={filterMovie}>search</button>
        </div>
        {filter.map((movie) => {
          return (
            <>
              <div className='col-md-4 mb-4'>
                <div class='card h-100 text-center p-4' key={movie._id}>
                  <div class='card-body'>
                    <h5 class='card-title'>{movie.moviename}...</h5>
                    <p class='card-text'>Genress:{movie.genress}</p>
                    <p className='card-text'>Show time:{movie.showtime}</p>
                    <p class='card-text'>Description:{movie.description}</p>
                    {/* <p className='card-text'>Cast:{movie.cast}</p>
                    <p className='card-text'>banner:{movie.banner}</p> */}
                    <p class='card-text lead fw-bold'>
                      Ticket Price:{movie.ticketPrice}
                    </p>

                    <NavLink
                      to={`/movie/${movie._id}`}
                      class='btn btn-outline-dark'
                    >
                      <button className='btn btn-outline-dark me-2'>
                        View
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Latest Movies</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowItems />}
        </div>
      </div>
    </div>
  )
}
export default Items
