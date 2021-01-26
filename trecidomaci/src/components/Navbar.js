import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Sminka
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Pocetna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/drogerije'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Drogerije
              </Link>
            </li>
            

            <li>
              <Link
                to='/prijavite_se'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Prijavite se
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>KONTAKT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;