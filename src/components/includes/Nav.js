import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <h1 className="logo"><Link to="/">Logo.</Link></h1>
            <nav>
                <ul>
                    {/* Link */}
                    
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/projects">Projects</Link></li> */}

                    {/* NavLink */}
                    <li>
                        <NavLink 
                            className={({isActive})=> isActive ? "active" : ""} 
                            to="/">Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=> isActive ? "active" : ""} 
                            to="/about">About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=> isActive ? "active" : ""} 
                            to="/contact">Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=> isActive ? "active" : ""} 
                            to="/profile">Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=> isActive ? "active" : ""} 
                            to="/projects">Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav