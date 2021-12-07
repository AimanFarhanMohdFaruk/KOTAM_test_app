import React from 'react';
import './style.css'


const Navbar = () => {

    return (
    <div class="sidebar">
        <h2>Kotam</h2>
        <a href="#home">About</a>
        <a href="#signUp" class="active" >Sign Up</a>
        <a href="#standings">Standings</a>
    </div>    
    );
}

export default Navbar;