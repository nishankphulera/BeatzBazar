import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="ml-4" href="/">
        Beatz Bazar
      </Navbar.Brand>
      <Nav className="ml-100">
        <Nav.Link href="BeatsPage" className="mx-3">
          Beats
        </Nav.Link>
        <Nav.Link href="Service" className="mx-3">
          Services
        </Nav.Link>
        <Nav.Link href="Welcome" className="mx-3">
          Login/Signup
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
