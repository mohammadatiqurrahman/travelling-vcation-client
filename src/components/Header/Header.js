import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo/travel.png'

const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="70"
          height="70"
          className="d-inline-block align-center"
        />
      Travel Goru
      </Navbar.Brand>

      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="text-primary">     
        Signed in as: {user.displayName}
      </Navbar.Text>
        <Nav.Link> <Image style={{width: '40%'}} src={user.photoURL} roundedCircle /></Nav.Link>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/my_orders">My Orders</Nav.Link>
        <Nav.Link as={Link} to="/addServices">Add Service</Nav.Link>
        {!user.email && <Nav.Link as={Link} to="/login">Login</Nav.Link> } 
        {!user.email && <Nav.Link as={Link} to="/register">Sign up</Nav.Link>}
        {/* {user.email && <button onClick={logOut}>logout</button>} */}
        {user.email && <Button onClick={logOut} variant="secondary" size="sm">logout</Button>}
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;