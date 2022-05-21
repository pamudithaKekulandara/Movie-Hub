import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart, delCart } from '../../redux/actions'

const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleAdd = (movie) => {
    dispatch(addCart(movie))
  }
  const handleDel = (movie) => {
    dispatch(delCart(movie))
  }

  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className='row'>
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    )
  }
  const cartItems = (movie) => {
    return (
      <>
        <div className='px-4 my-5 bg-light rounded-3 py-5'>
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-4'>
                <img
                  src={movie.banner}
                  alt={movie.movieName}
                  height='200px'
                  width='180px'
                />
              </div>
              <div className='col-md-4'>
                <h3>{movie.movieName}</h3>
                <p className='lead fw-bold'>
                  {movie.qty} X ${movie.ticketprice} = $
                  {movie.qty * movie.ticketprice}
                </p>
                <button
                  className='btn btn-outline-dark me-4'
                  onClick={() => handleDel(movie)}
                >
                  <i className='fa fa-minus'></i>
                </button>
                <button
                  className='btn btn-outline-dark'
                  onClick={() => handleAdd(movie)}
                >
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  const buttons = () => {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <NavLink
              to='/checkout'
              className='btn btn-outline-dark mb-5 w-25 mx-auto'
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    )
  }

  const proceedCheckout = () => {
    return 0
  }

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  )
}

export default Cart
