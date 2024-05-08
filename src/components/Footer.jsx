import React from 'react';
import Icon from '@mui/material/Icon';
import './Footer.css';

function Footer() {
    return (
      <>
      <div className="footer">
        <div className="footer-social-links">
          <a href="#"><Icon className="fab fa-facebook" /></a>
          <a href="#"><Icon className="fab fa-instagram" /></a>
          <a href="#"><Icon className="fab fa-twitter" /></a>
          <a href="#"><Icon className="fab fa-github" /></a>
        </div>

        <p className="copyright-footer">© QuickB | All rights reserved</p>
      </div>
      </>
    );
  }

export default Footer;