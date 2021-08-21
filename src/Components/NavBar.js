import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar () {
    return (
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/Therapists">Therapists</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

