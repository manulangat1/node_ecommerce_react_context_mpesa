import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <NavLink to="/">  <h1>This is it</h1> </NavLink>
            <ul>
                <li> <NavLink to="/login">Login</NavLink> </li>
                <li> <NavLink to="/register">Register</NavLink> </li>
            </ul>
        </header>
    )
}
export default Header