import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, delCart } from '../../redux/actions'
import StripeCheckout from 'react-stripe-checkout'

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

  var total = 0
  const cartItems = (movie) => {
    total = total + parseInt(movie.ticketprice)
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

  const buttons = (movie) => {
    const makePayment = async (token) => {
      const body = {
        token,
        movie,
        total,
      }
      const headers = {
        'Content-Type': 'application/json',
      }
      return fetch('http://localhost:5000/payment', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      })
        .then((res) => {
          console.log('RESPONSE', res)
          const { status } = res
          console.log('STATUS', status)
          window.location.reload(false)
        })
        .catch((err) => console.log(err))
    }

    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='mb-3 w-50 mx-auto'>
              <li className='list-group-item d-flex justify-content-between'>
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </div>
          </div>
          <StripeCheckout
            stripeKey='pk_test_51L25iiBEL1qU73Gcc3tVwXpkgQmyqAz732exSJNd9x0QkfdFiodnhn8IVt3NniMFSsrAkkptjnovXDgtneX0mEP2003ReSC4Cm'
            token={makePayment}
            name='Checkout'
            AMOUNT={total * 100}
            billingAddress
            shippingAddress
          >
            <div className='row'>
              <button className='btn btn-outline-dark mb-5 w-25 mx-auto'>
                Proceed to Checkout
              </button>
            </div>
          </StripeCheckout>
        </div>
      </>
    )
  }

  return (
    <div className='container'>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  )
}

export default Cart
