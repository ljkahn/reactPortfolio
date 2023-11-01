import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import brand from '../assets/workImages/brand.png';
import PersonalAi from '../assets/siteImages/PersonalAi.png';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-transparent navbar ">
    <Container className='d-flexjustify-content-between'>
      <Navbar.Brand>
        <img src={PersonalAi} alt='Lia Kahn' className='personal'/>
        <img src={brand} alt='Lia Kahn Logo' className='nav-brand'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='fs-1'>
     
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/work" className='nav-link'>Portfolio</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          <Link to="/resume" className='nav-link'>Resume</Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}


export default Header;