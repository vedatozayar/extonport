import React from 'react';
import './footer.scss';
import Map from '../../assets/map.png';
import TitleLine from '../titleLine/TitleLine';
import Logo from '../../assets/extonport.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faFax,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <div className='map'>
          <img src={Map} alt='footer map' />
        </div>
        <div className='findus'>
          <div className='container'>
            <h1>FIND US</h1>
            <TitleLine />
            <div className='info-items'>
              <div className='info-item'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faLocationDot} />
                </div>
                <div className='info-text'>
                  <h1>Location</h1>
                  <span>
                    A830 Albyn Dr, Fort William<br></br> 30100 Scotland,GB
                  </span>
                </div>
              </div>
              <div className='info-item'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faPhone} />
                </div>
                <div className='info-text'>
                  <h1>Call</h1>
                  <span>+44 53 099 1611</span>
                  <span>+44 77 461 1308</span>
                </div>
              </div>
              <div className='info-item'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faEnvelope} />
                </div>
                <div className='info-text'>
                  <h1>MAIL</h1>
                  <span>admin@extonport.com</span>
                  <span>info@extonport.com</span>
                </div>
              </div>
              <div className='info-item'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faFax} />
                </div>
                <div className='info-text'>
                  <h1>FAX</h1>
                  <span>44-848-465-1500</span>
                  <span>44-848-465-7784</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-main'>
        <div className='container'>
          <div className='top'>
            <div className='columns'>
              <div className='column'>
                <h5>COMPANY</h5>
                <ul className='list-items'>
                  <li>
                    <a href='/#home' alt=''>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='/about' alt=''>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='/careers' alt=''>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href='/contact' alt=''>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='column'>
                <h5>OPENING HOURS</h5>
                <ul className='list-items'>
                  <li>
                    <span>Monday 11:00-16:00</span>
                  </li>
                  <li>
                    <span>Tuesday 11:00-16:00</span>
                  </li>
                  <li>
                    <span>Saturday 10:00-18:00</span>
                  </li>
                  <li>
                    <span>Wednesday 8:00-16:00</span>
                  </li>
                </ul>
              </div>
              <div className='column'>
                <h5>RESOURCES</h5>
                <ul className='list-items'>
                  <li>
                    <a href='/#request' alt=''>
                      Request A Service
                    </a>
                  </li>
                  <li>
                    <a href='/#services' alt=''>
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href='/about#gallery' alt=''>
                      Our Gallery
                    </a>
                  </li>
                  <li>
                    <a href='/about#testimonial' alt=''>
                      Client Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div className='column'>
                <div className='logo-container'>
                  <img src={Logo} alt='logo' />
                </div>
                <p>
                  Extonport is the Scotland's leading and best provider of
                  transportation,warehousing and logistics services
                </p>
                <div className='socials'>
                  <div className='social-icon'>
                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                  </div>
                  <div className='social-icon'>
                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                  </div>
                  <div className='social-icon'>
                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                  </div>
                  <div className='social-icon'>
                    <FontAwesomeIcon className='icon' icon={faYoutube} />
                  </div>
                  <div className='social-icon'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          <p>
            Copyright © 2022 All rights reserved | Website developed by
            <a
              target='_blank'
              rel='noreferrer'
              href='https://vedatozayar-portfolio.web.app/'
            >
              Vedat Edip Özayar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
