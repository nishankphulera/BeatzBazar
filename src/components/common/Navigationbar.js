import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="ml-6" href="/">
        Beatz Bazar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-4" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-2" style={{ marginRight: "10px" }}>
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
      </Navbar.Collapse>
      <style>
        {`
        @media (max-width: 767px) {
          .navbar-nav .nav-link {
            margin-right: 5px;
          }
        }
        `}
      </style>
    </Navbar>
  );
};

export default Navigationbar;
