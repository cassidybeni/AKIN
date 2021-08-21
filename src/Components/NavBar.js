import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/AKIN-Word-Logo.png';


export default function NavBar () {
    return (
        <div className='navbar'>
            <img className='logo' src={Logo} />
            <Link to="/Home">Home</Link>
            <Link to="/Therapists">Therapists</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

