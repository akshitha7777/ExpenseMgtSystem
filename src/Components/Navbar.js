


/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-inline-block align-top">
        <strong><h1 className='navbar-brand' style={{marginBottom:'15px',  fontSize:'30px'}}>Expenso</h1></strong>
        <div className="links">
          
            <Link to= "/home" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px',margin: '0px 10px'}}>Home</Link>
            <Link to="/split" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Split Expenses</Link>
            <Link to="/expense" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Expense Tracker</Link>
            <Link to="/register" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Register</Link>
            <Link to="/login" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Login</Link>
            <Link to= "/home" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px',margin: '0px 10px'}}>Logout</Link>
            </div>
        
        </nav>
  )
}

export default Navbar;
    
    // <Navbar bg="light" expand="lg">

    // <Navbar.Brand href="#home">Expenso</Navbar.Brand>
    // <Navbar.Toggle aria-controls="basic-navbar-nav" />
    // <Navbar.Collapse id="basic-navbar-nav">
    // 
    //   <Nav className="me-auto">
    //     <Link to="/home">Home</Link>
    //     <Link to="/split">Split Payment</Link>
    //     <Link to="/expense">Expense Tracker</Link>
    //     <Link to="/register">REgister</Link>
    //     <Link to="/login">Login</Link>
    //   </Nav>
    // </Navbar.Collapse>
  
    // </Navbar>
  
