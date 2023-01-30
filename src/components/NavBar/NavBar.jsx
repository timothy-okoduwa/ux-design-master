import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import l from './images/TEXT.svg'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="main">
        <Container>
          <Navbar.Brand className="width">
            <img src={l} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className='hamburger'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav className="navs">Courses</Nav>
              <Nav className="navs">About</Nav>
              <Nav className="navs">Contact</Nav>
              <Nav className="navs">Login</Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar