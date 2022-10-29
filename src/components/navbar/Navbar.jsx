import React from 'react';
import './navbar.scss';
import Logo from '../../assets/extonport.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo-cont'>
          <a href='/'>
            <img src={Logo} alt='logo' className='logo' />
          </a>
        </div>

        <div className='menu'>
          <ul className='menu-links'>
            <a href='/' className='menu-link'>
              <li className='link-cont'>HOME</li>
            </a>
            <a href='/about' className='menu-link'>
              <li className='link-cont'>ABOUT</li>
            </a>
            <a href='/careers' className='menu-link'>
              <li className='link-cont'>CAREERS</li>
            </a>
            <a href='/contact' className='menu-link'>
              <li className='link-cont'>CONTACT</li>
            </a>
          </ul>
        </div>

        <div className='hamburger'>
          <FontAwesomeIcon
            className='icon'
            icon={faBars}
            onClick={() => setShowNav(!showNav)}
          />
          {showNav && (
            <div className='ham-menu'>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/careers'>Careers</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
