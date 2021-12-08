import React from 'react';
import './style.css'
import tennis from "../../assets/images/tennis.png"


const Navbar = () => {

    return (
    <div class="sidebar">
        <h2 >Kotam <img src={tennis} class="logo" alt="tennisBall"/></h2>
        <a href="/about" class="active">About</a>
        <a href="#signUp"  >Sign Up</a>
        <a href="#standings">Standings</a>
    </div>
    );
}

export default Navbar;