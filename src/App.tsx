import React from 'react';
import './App.scss';
import {Money} from "./components/Money";
import {BankAccount} from "./components/BankAccounts";
import Container from "react-bootstrap/Container";
import {Navbar, NavDropdown} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Statements} from "./components/Statements";
import {IncomeOutgoingsMoney} from "./components/IncomeOutgoingsMoney";

function App() {
  return (

      <>
        <Router>
      <Navbar variant="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">Qamarium Budgeting</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Statements" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="/regular-income">Regular Statements</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/income-this-month">Statements This Month</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Outgoing" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="/outgoings">Outgoings Overview</NavDropdown.Item>
              <NavDropdown.Item href="/regular-outgoings">Regular Outgoings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/statements">Statements</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>

          </Nav>
          <Navbar.Toggle />
          <Nav>
            <Navbar.Text>
              Signed in as:
            </Navbar.Text>
            <NavDropdown title="Qamar" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile Settings</NavDropdown.Item>
              <NavDropdown.Item href="/change-password">Change Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/income">
          <Statements />
        </Route>
        <Route path="/settings">
          <h1>Hai</h1>
        </Route>
        <Route path="/">
          <BankAccount />
        </Route>
      </Switch>
  </Router>
      </>
  );
}

export default App;
