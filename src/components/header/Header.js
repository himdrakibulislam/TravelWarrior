import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from './favicon.png'
import './header.css'
const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <div className='headerstyle'>
             <Navbar bg="dark" variant="dark" expand='lg' fixed='top d-block'>
    <Container>
    <Navbar.Brand href="#home"> <img src={logo} className='' height='40' alt="" />Travel Warrior</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Link to="/home">Home</Link>
    <Link to="/myorders">My Orders</Link>
    <Link to="/manageorders">Manage Order</Link>
    <Link to="/aboutus">About Us</Link>
<small className='text-white mt-2 me-2'>{user.displayName ?user.displayName:user.email}</small>
{
  user.displayName? <small className='text-white mt-2 me-2'><img src={user?.photoURL} className="rounded circle" width="30" height="30" alt="" /></small>: <></>
}
{user.email ? <button onClick={logOut} className='btn btn-success'>Log Out</button>:<Link to="/login">Login</Link>}
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;