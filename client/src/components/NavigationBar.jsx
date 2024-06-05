import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <>
    <Navbar bg="light p-1" style={{boxShadow:"0.1rem 0.1rem 1rem 0.01rem grey"}} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">Logo</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button type="button" class="btn btn-light border border-black rounded-0 me-4">Learn More</button>
            <button type="button" class="btn btn-dark rounded-0">Sign Up</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  )
}

export default NavigationBar
