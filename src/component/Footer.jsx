// Import
import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component
const Footer = () => {
  return (
    <Navbar
      className="fixed-bottom"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <p className="footer">
        <a className="footerInfo gitHubLink" href="https://github.com">
          fork me on GitHub
        </a>
        | created by: &nbsp;
        <a className="footerInfo" href="https://github.com">
          Claude
        </a>
        ,
        <a className="footerInfo" href="https://github.com">
          Senthil
        </a>
        ,
        <a className="footerInfo" href="https://github.com">
          Likitha
        </a>
      </p>
    </Navbar>
  );
};

// Component export
export default Footer;
