import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./styles/App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap"

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          SSK
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={window.location.pathname}>
                <LinkContainer to="/signup">
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/List">
                    <Nav.Link href="/List">List User</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;