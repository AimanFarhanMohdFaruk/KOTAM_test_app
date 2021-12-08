import React from 'react';
import './style.css'


const Navbar = () => {

    return (
    <div class="sidebar">
        <h2>Kotam</h2>
        <a href="#home" class="active">About</a>
        <a href="#signUp"  >Sign Up</a>
        <a href="#standings">Standings</a>
    </div>
    );
}

export default Navbar;