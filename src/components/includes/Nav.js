import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <h1 className="logo"><Link to="/">Logo.</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav