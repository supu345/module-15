import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const AppNavBar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">StudentReg</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            List
          </NavLink>
          <NavLink className="nav-link" to="/registration">
            Registration
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
