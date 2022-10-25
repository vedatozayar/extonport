import React from 'react';
import './navbar.scss';
import Logo from '../../assets/extonport.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo-cont'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='logo' />
          </Link>
        </div>
        <div className='menu'>
          <ul className='menu-links'>
            <Link to='/' className='menu-link'>
              <li className='link-cont'>HOME</li>
            </Link>
            <Link to='/about' className='menu-link'>
              <li className='link-cont'>ABOUT</li>
            </Link>
            <Link to='/careers' className='menu-link'>
              <li className='link-cont'>CAREERS</li>
            </Link>
            <Link to='/contact' className='menu-link'>
              <li className='link-cont'>CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
