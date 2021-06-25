import React from 'react'
import Logo from './img/logo.png'

function Navbar() {
    return (
        <div className="nav-bar d-flex justify-content-around">
            <img className="logo" src={Logo}/>
            <div className ="nav-urls">
                <a className="nav-url text-gold" href="#">All Rooms</a>
                <a className="nav-url text-gold" href="#">Schedule</a>
                <a className="nav-url text-gold" href="#">Customers</a>
                <a className="nav-url text-gold" href="#">Contact Us</a>
            </div>
            <div className="nav-urls">
                <a className="text-gold d-inline mx-2">Sign Up</a>
                <a className="text-gold d-inline mx-2">Login</a>
            </div>
        </div>
    )
}

export default Navbar
