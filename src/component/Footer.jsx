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
        <a
          className="footerInfo gitHubLink"
          href="https://github.com/caldric/battleship-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          fork me on GitHub
        </a>
        &nbsp;| created by:&nbsp;
        <a
          className="footerInfo"
          href="https://github.com/caldric"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude
        </a>
        ,&nbsp;
        <a
          className="footerInfo"
          href="https://github.com/spk2dc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senthil
        </a>
        ,&nbsp;
        <a
          className="footerInfo"
          href="https://github.com/likithaaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Likitha
        </a>
      </p>
    </Navbar>
  );
};

// Component export
export default Footer;
