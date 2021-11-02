import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Title() {
  return (
    <Navbar>
      <Container className='head-container'>
        <Navbar.Brand className='head' href="#home">Password Generator</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  )
}

export default Title;