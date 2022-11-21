import React from 'react';

// Footer

import logoFooter from '../assets/logofooter.png';

function Footer() {
  const anneeCreation = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo" className="footer__logo" />
      <p className="footer__text">
        &copy;
        {anneeCreation} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
