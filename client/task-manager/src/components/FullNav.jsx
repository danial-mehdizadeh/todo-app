import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function FullNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Task Manager App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/members">
              Members
            </NavLink>
            <NavLink className="nav-link" to="/history">
              History
            </NavLink>
            <NavDropdown title="User 4 is logged in" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">User 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">User 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">User 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">User 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FullNav;
