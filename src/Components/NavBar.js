import React from "react";
import { Container, Navbar, Nav, NavItem, Button } from "react-bootstrap";
function NavBar() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            {" "}
            <img src={"logo.svg"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>HOW WE WORK</Nav.Link>
              <Nav.Link>BLOG</Nav.Link>
              <Nav.Link>ACCOUNT</Nav.Link>
              <Button variant="outline-dark">View Plans</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
