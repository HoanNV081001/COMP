import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function navbar(){
    return(
      <>
        <Navbar bg="primary" variant="dark">
        <Container style={{ justifyContent: 'center'}}>     
          <Navbar.Brand href="#home">University of Greenwich</Navbar.Brand>   
        </Container>
      </Navbar>
        </>
    )
}