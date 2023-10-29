import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';




import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import WorkCarousel from './components/Portfolio'
import Background from './components/Background'
import Resume from './components/Resume'


function App() {


  return (

    
    
  <Router>
    <Background/>
    <Header/>
    <Routes>
    <Route path = '/' element = {<About/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/work' element = {<WorkCarousel/>}/>
    <Route path = '/resume' element = {<Resume/>}/>
    <Route path = '*' element = {<Error/>}/>
    </Routes>
    <Footer/>
  </Router>
  


  
  )
}

export default App; 