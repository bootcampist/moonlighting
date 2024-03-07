import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


function Header(){
    return (
        //Header Container
        <div className="header-container">
            <div className="header-inner-container">
                {/* Logo */}
                <div id="logo"></div>

                {/* Navigation Links */}
                <div id="nav">
                    <ul id="nav-links">
                        <li className="nav-links">
                            <span className="text-link">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    Home
                                </NavLink>
                            </span>
                        </li>
                        <li className="nav-links">
                            <NavLink
                                to="projects"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-links">
                            <NavLink
                                to="contact"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Contact
                            </NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
