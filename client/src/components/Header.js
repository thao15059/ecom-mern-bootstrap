import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar bg="dark">
            <Navbar.Brand href="/">
              <img
                src="/images/logo.png"
                className="d-inline-block align-top"
                alt="Ecom Mern Logo"
              />
            </Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/cart">
                <i class="fas fa-shopping-cart    "></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i class="fas fa-user    "></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
