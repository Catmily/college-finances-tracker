import React, {useState} from 'react';
import './App.scss';
import {Money} from "./components/Money";
import {BankAccount} from "./components/BankAccount";
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
import {TransferMoney} from "./components/TransferMoney";
import {LoginPage} from "./components/LoginPage";
import {Settings} from "./components/Settings";
import {Profile} from "./components/Profile";
import {RecordTransaction} from "./components/RecordTransaction";
import {ChangePassword} from "./components/ChangePassword";

function App() {
  let AUTHENTICATED = 1;
  const [passwordPrompt, setPasswordPrompt] = useState<boolean>(false);


  function changePassword(oldPassword: string, password: string) {
  }

  return (

  <>
    {passwordPrompt ? <ChangePassword actionButton={changePassword} closeButton={setPasswordPrompt}/> : ""}

    {AUTHENTICATED ?

            <Navbar variant="dark" className="navbar-custom">
              <Container>
                <Navbar.Brand href="#home">Qamarium Budgeting</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Income" id="collapsable-nav-dropdown">
                    <NavDropdown.Item href="/regular-income">Income Overview</NavDropdown.Item>
                    <NavDropdown.Item href="/regular-income">Regular Income</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Outgoing" id="collapsable-nav-dropdown">
                    <NavDropdown.Item href="/outgoings">Outgoings Overview</NavDropdown.Item>
                    <NavDropdown.Item href="/regular-outgoings">Regular Outgoings</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/statements">Statements</Nav.Link>
                  <Nav.Link href="/transfer-money">Transfer Money</Nav.Link>
                  <Nav.Link href="/record-transaction">Record a Transaction</Nav.Link>


                </Nav>
                <Navbar.Toggle />
                <Nav>
                  <Navbar.Text>
                    Signed in as:
                  </Navbar.Text>
                  <NavDropdown title="Qamar" id="collapsable-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile Settings</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => {setPasswordPrompt(true)}}>Change Password</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Container>
            </Navbar>
              : ""}
          <Router>

      <Switch>
        <Route path="/statements">
          <Statements />
        </Route>
        <Route path="/transfer-money">
          <TransferMoney />
        </Route>
        <Route path="/login">
          <LoginPage REGISTER={false} />
        </Route>
        <Route path="/register">
          <LoginPage REGISTER={true} />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/record-transaction">
          <RecordTransaction />
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
