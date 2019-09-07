import React from 'react';
import '../styles/Footer.scss';
function Footer() {
  return (
    <div className="Footer">
      <p className="copyright">&copy; {new Date().getFullYear()}</p>
      <p className="name"><a href="https://uphere.space">Jeremy Hamm</a></p>
    </div>
  );
}
  
export default Footer;
  