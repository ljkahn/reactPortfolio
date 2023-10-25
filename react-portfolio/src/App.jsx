import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";



import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Work from './components/Work'


function App() {
  //   const particlesInit = async (main) => {
  //   console.log(main);
  //   await loadFull(main);
  // };

  return (

    
    
  <Router>
    <Header/>
    <Routes>
    <Route path = '/' element = {<About/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/work' element = {<Work/>}/>
    <Route path = '*' element = {<Error/>}/>
    </Routes>
    <Footer/>
  </Router>
  


  
  )
}

export default App