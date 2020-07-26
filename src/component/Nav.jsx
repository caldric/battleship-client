// Imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component
const BurgerNav = ({ getSession, sessionUser }) => {
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
    // <nav>
    //   <ul>
    //     <li>Burger icon</li>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/signup">Sign up</Link>
    //     </li>
    //     {sessionUser ? (
    //       <>
    //         <li>
    //           <Link to="/profile">Profile</Link>
    //         </li>
    //         <li>
    //           <Link to="/new/game">New game</Link>
    //         </li>
    //         <li>
    //           <button type="button" onClick={destroySession}>
    //             Logout
    //           </button>
    //         </li>
    //       </>
    //     ) : (
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    //     )}
    //   </ul>
    // </nav>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Battleship</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          {sessionUser ? (
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/new/game">New Game</Nav.Link>
              <Button onClick={destroySession} type="button" href="/logout">
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
export default BurgerNav;
