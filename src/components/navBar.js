import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand fw-bold fs-4' href='#'>
          MOVIE HUB
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {!localStorage.getItem('admin') ? (
            <>
              <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/items'>
                    Movies
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' href='/theater'>
                    Theaters
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}

          <div className='buttons'>
            {localStorage.getItem('admin') ||
            localStorage.getItem('user') != null ? (
              <>
                <a href='/logout' className='btn btn-outline-dark'>
                  <i className='fa fa-sign-in me-1'></i> Logout
                </a>
              </>
            ) : (
              <>
                <a href='/login' className='btn btn-outline-dark'>
                  <i className='fa fa-sign-in me-1'></i> Login
                </a>
              </>
            )}
          </div>
          {!localStorage.getItem('admin') ? (
            <>
              <div className='buttons'>
                <a href='/reg' className='btn btn-outline-dark'>
                  <i className='fa fa-user-plus ms-2'></i> Register
                </a>
              </div>
              <div className='buttons'>
                <NavLink to='/cart' className='btn btn-outline-dark'>
                  <i className='fa fa-shopping-cart ms-2'></i> Cart (
                  {state.length})
                </NavLink>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  )
}
export default NavBar
