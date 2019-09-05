import React from 'react';
import '../styles/Footer.scss';
function Footer() {
    return (
      <div className="Footer">
        <p className="copyright">&copy; {new Date().getFullYear()}</p>
      </div>
    );
  }
  
  export default Footer;
  