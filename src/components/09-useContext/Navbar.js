import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-brand">
                useContext
            </div>

            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">
                        About
                    </NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
