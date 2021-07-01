import React from 'react'
import Logo from './img/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav-bar animate__animated animate__fadeInDown">
            <Link to="/">
                <img className="logo" draggable="false" src={Logo}/>
            </Link>
            <div className ="my-auto">
                <Link className="nav-link mx-2 text-gold" to="/rooms">All Rooms</Link>
                <Link className="nav-link mx-2 text-gold" to="#">Gallery</Link>
                <Link className="nav-link mx-2 text-gold" to="#">Location</Link>
                <Link className="nav-link mx-2 text-gold" to="#">Contact Us</Link>
            </div>
            <div className="my-auto">
                <Link className="nav-link text-gold mx-2" to="#">Sign Up</Link>
                <Link className="nav-link text-gold mx-2" to="#">Login</Link>
            </div>
            <a className="fas fa-bars menu-icon text-gold" href="#menu"></a>
        </div>
    )
}

export default Navbar
