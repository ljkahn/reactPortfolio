import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body">
    <Container className='d-flex justify-content-center'>
      <Navbar.Brand>
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