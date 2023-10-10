import React from 'react';
import { Button, Container,  Form,  Nav, NavDropdown, Navbar, } from "react-bootstrap" ;
function Navibar() {
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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Product</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex" style={{marginRight: "200px",}}>
          <Button variant="outline-success"
           style={{marginRight:"5px", padding: "4px, 15px", color:"black", borderColor:"black"}}>Login</Button>
          <Button variant="outline-success" style={{ color:"black", borderColor:"black"}}>  Register</Button>
            <Button variant="outline-success" style={{marginLeft: "5px",  color:"black", borderColor:"black"}}><img src="cart-icon-28354.jpg" alt=""  style={{height:"15px"}}/> cart (0)</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navibar;
