import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import Movie from './movie'

const Theaters = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([data])
    const [loading, setLoading] = useState(false)
    let componentMounted = true
  
    useEffect(() => {
      const getItems = async () => {
        setLoading(true)
        const response = await fetch(`http://localhost:5000/theater/`)
  
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
  
    const ShowItems = () => {
      return (
        <>
          
             
          {filter.map((theater) => {
            return (
              <>
                <div className='col-md-4 mb-4'>
                  <div class='card h-100 text-center p-4' key={theater._id}>
                    <div class='card-body'>
                      <h5 class='card-title'>{theater.theatername}...</h5>
                      <p class='card-text'>Capacity:{theater.nosheets}</p>
                      <p className='card-text'>Location:{theater.place}</p>
                      <p class='card-text'>Description:{theater.description}</p>
                    
  
                     
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
              <h1 className='display-6 fw-bolder text-center'>Theaters</h1>
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

export default Theaters;
