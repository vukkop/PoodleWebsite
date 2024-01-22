import React from 'react'
import Logo from "../assets/logo/favicon.svg"

const NavBar = () => {
  return (
    <div className="row mb-4">
      <nav className="navbar navbar-expand-md bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <img src={Logo} alt="" height={50} className='logo' />
          <a className="navbar-brand me-5" href="#Home">
            Mini Poodles
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav text-center me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Home">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Puppies">Puppies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
