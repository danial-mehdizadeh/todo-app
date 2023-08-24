import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { loginApi } from "../api/membersApi";

function FullNav() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
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
            <NavLink className="nav-link" to="/modifHistory">
              History
            </NavLink>
            <NavDropdown title="Log in" id="basic-nav-dropdown">
              <div className="p-3">
                {" "}
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    console.log(login);
                    const loginInfo = await loginApi(login);
                    console.log(loginInfo, localStorage.getItem("token"));
                    setLogin({ username: "", password: "" });
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      value={login.username}
                      onChange={(e) => {
                        setLogin({ ...login, username: e.target.value });
                        console.log(login.username);
                      }}
                      type="text"
                      placeholder="Enter your username"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="loginForm.ControlInput2"
                  >
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={login.password}
                      onChange={(e) => {
                        console.log(login.password);
                        setLogin({ ...login, password: e.target.value });
                      }}
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  <input
                    className="btn-primary"
                    type="submit"
                    value="submit"
                    variant="primary"
                  />
                </Form>
                {/* <NavDropdown.Item href="#action/3.1">User 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">User 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">User 3</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  you are logged in as:{" "}
                  {localStorage.getItem("user") || " guest"}
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FullNav;
