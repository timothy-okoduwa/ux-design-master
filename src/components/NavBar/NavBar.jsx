
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import l from './images/TEXT.svg'
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="main fixed-top">
        <Container>
          <Navbar.Brand className="width">
               <Link to='/' > 
            <img src={l} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className='hamburger'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to='/podcast' style={{textDecoration:'none'}}> 
              <Nav className="navs">Podcast</Nav>
              </Link> */}
             
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

