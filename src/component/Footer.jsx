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
        >
          fork me on GitHub
        </a>
        | created by:&nbsp;
        <a
          className="footerInfo"
          href="https://github.com/caldric"
          target="_blank"
        >
          Claude
        </a>
        ,&nbsp;
        <a
          className="footerInfo"
          href="https://github.com/spk2dc"
          target="_blank"
        >
          Senthil
        </a>
        ,&nbsp;
        <a
          className="footerInfo"
          href="https://github.com/likithaaa"
          target="_blank"
        >
          Likitha
        </a>
      </p>
    </Navbar>
  );
};

// Component export
export default Footer;
