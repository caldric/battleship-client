// Imports
import React, { useEffect } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component
const MainNav = ({ getSession, sessionUser }) => {
  // Logout on click handler
  const destroySession = () => {
    sessionStorage.setItem('user', '');
    getSession();
  };

  useEffect(() => {
    getSession();
  }, []);

  // Render
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <img id="favicon" src="/favicon.ico" alt="" />

      <Navbar.Brand id="nav-title" href="/">
        Battleship
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          {sessionUser ? (
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/new/game">New Game</Nav.Link>
              <Button
                type="button"
                id="btnLogout"
                onClick={destroySession}
                href="/"
              >
                Logout
              </Button>
            </>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Component export
export default MainNav;
