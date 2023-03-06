import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoSettingsSharp as Icon } from "react-icons/io5";
import React from "react";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{ color: "#9f146e", fontWeight: "bolder" }}
        >
          Budget Planner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" eventKey={2}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions" eventKey={2}>
              Transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" eventKey={2}>
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/budget" eventKey={2}>
              Budget
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} as={Link} to="/settings">
              <Icon size={"1.5rem"} color={"#9f146e"}></Icon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
