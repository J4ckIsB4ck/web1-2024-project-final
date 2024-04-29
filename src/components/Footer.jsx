import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <>
        <div className='back-footer'>
          <div className='back-footer-child'>            
            <img src='QuickBlogo.png' alt='QuickB' width="30" height="30"/>
            <h1>QuickB</h1>
          </div>
          <div>
            <p>Copyright © 2024 The Quiz, Inc.</p>
          </div>
        </div>
      </>
    );
  }

export default Footer;