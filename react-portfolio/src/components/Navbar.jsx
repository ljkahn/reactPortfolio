import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import brand from '../assets/workImages/brand.png';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body">
    <Container className='d-flex justify-content-center'>
      <Navbar.Brand>
        <img src={brand} alt='Lia Kahn Logo' className='nav-brand'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='fs-1'>
     
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/work" className='nav-link'>Work</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>

        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}


export default Header;