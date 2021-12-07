import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes} from "react-router-dom";


//Import pages & components
import Navbar from "./components/Navbar/Navbar"
import AboutPage from "./pages/About/index"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path= "/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
