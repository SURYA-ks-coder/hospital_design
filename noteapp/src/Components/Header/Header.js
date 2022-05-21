import React from 'react'
import Logo from './Logo.png'
import './Nav.css'

function Header() {
  return (
    <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-light p-20">
              <div className="container">
              <a class="brandlogo" href="#">
                <img src={Logo} alt="Logo" width="50" height="50"/>
              </a>
              <a className="navbar-brand text-light" href="#">Hospital</a>
              <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button> 
                <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Appoinment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">Service</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light">Join Us</a>
            </li>
              </ul>
            </div>
            </div>
            </nav>
     </div>
  )
}

export default Header