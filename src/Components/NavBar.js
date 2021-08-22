import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/AKIN-Word-Logo.png';


export default function NavBar () {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <img className='logo' src={Logo} alt='logo' />

                <div className='navbar'>
                    <Link to="/Home">Home</Link>
                    <Link to="/Therapists">Therapists</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

