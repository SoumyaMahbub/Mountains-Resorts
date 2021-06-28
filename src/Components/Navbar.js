import React from 'react'
import Logo from './img/logo.png'

function Navbar() {
    return (
        <div className="nav-bar animate__animated animate__fadeInDown">
            <img className="logo" draggable="false" src={Logo}/>
            <div className ="my-auto">
                <a className="nav-link mx-2 text-gold" href="#">All Rooms</a>
                <a className="nav-link mx-2 text-gold" href="#">Schedule</a>
                <a className="nav-link mx-2 text-gold" href="#">Customers</a>
                <a className="nav-link mx-2 text-gold" href="#">Contact Us</a>
            </div>
            <div className="my-auto">
                <a className="nav-link text-gold mx-2">Sign Up</a>
                <a className="nav-link text-gold mx-2">Login</a>
            </div>
        </div>
    )
}

export default Navbar
