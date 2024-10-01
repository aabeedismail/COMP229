// Layout.jsx, Aabeed Ismail, 301457580, 2024-09-29
import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.png';

export default function Layout() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/About">About Me</Link> <br />
            <Link to="/Projects">Projects</Link> <br />
            <Link to="/Services">Services</Link> <br />
            <Link to="/Contact">Contact Me</Link> <br />
        </nav>
        <div id='logo'>
            <img src={logo} alt="Logo" width={110}/>
        </div>
        </>
    );
}
