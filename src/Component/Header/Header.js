import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../Custom/CustomLink';
import Requeir from '../Requeirauth/Requeir';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  
    return (
        <Navbar className='navbar-css' variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className=''> <span className='head-css'> HOME TUTOR</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-css">

        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/checkout">Check out</CustomLink>       
        <CustomLink to="/blog">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>

        {
          user? <button className='logout-btn' onClick={logout}>Log out</button>
          :
           <CustomLink to="/login">Login</CustomLink>
        }
        {
          user? '': <CustomLink to="/singup">Sing up</CustomLink>
        }
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;