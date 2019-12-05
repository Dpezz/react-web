import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function NavLayout() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/home">
                <FontAwesomeIcon icon={faSignOutAlt} />
                SignOut
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link href="/dashboard">
              <Button variant="outline-light btn-sm">Get Started</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavLayout;
