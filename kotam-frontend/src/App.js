import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes} from "react-router-dom";
import React from 'react'; // included by Irfan to avoid 'JSX Scope' error


//Import pages & components
import Navbar from "./components/Navbar/Navbar"
import AboutPage from "./pages/About/index"
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path= "/about" element={<AboutPage/>}/>
      </Routes>
      <Routes>
      <Route path= "/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
