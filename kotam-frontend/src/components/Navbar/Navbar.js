import React from 'react';
import './style.css'
import tennis from "../../assets/images/tennis.png"
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
    <div class="sidebar">
        <h2 class="heading">Kotam <img src={tennis} class="logo" alt="tennisBall"/></h2>
        <NavLink to='/about' class="active">About</NavLink>
        <NavLink to="/signup">Login / Register</NavLink>
        <NavLink to="/standings">Standings</NavLink>
    </div>
    );
}

export default Navbar;