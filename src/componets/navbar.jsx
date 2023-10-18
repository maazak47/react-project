import React, {  useState } from 'react'
import { Button, Container,  Form,  Nav, NavDropdown, Navbar, } from "react-bootstrap" ;

import { Link } from 'react-router-dom';




function Navibar() {
  
 
   
  // console.log(cart)
  
  return (

    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" 
        style={{color: "red",
        fontWeight: "bold", marginLeft:"70px", }}> 
        <span style={{color:"black"}}>Bollywood</span><span style={{color: "red"}}>Style</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            <Nav.Link > <Link to="home" >Home</Link> </Nav.Link>
            <Nav.Link> <Link to="product">Product</Link> </Nav.Link>
            <Nav.Link > <Link to="about">About</Link></Nav.Link>
            <Nav.Link> <Link to="contact"> Contact</Link> </Nav.Link>
          </Nav> 
          <Form className="d-flex" style={{marginRight: "200px",}}>
         <Link to="login"> <Button variant="outline-success"
           style={{marginRight:"5px", padding: "4px, 15px", color:"black", borderColor:"black"}}> <img src="login.png" alt="" style={{height:"15px"}} /> Login</Button> </Link>
         <Link to="register"> <Button variant="outline-success" style={{ color:"black", borderColor:"black"}}> <img src="Daco.png" alt="" style={{height:"15px"}}/> Register</Button></Link>
          <Link to="cart"><Button variant="outline-success" style={{marginLeft: "5px",  color:"black", borderColor:"black"}}><img src="cart-icon-28354.jpg" alt=""  style={{height:"15px"}}/>Cart (0)</Button></Link>  
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navibar;
