// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">Copyright & Design By @Dexter.Cosmos - 2025</p>
        <a href="#top" className="back-top-btn">
          <span className="span">Back To Top</span>
          <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;