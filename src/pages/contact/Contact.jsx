import React from 'react';
import './contact.scss';
import CommonHeader from '../../components/commonHeader/CommonHeader';
import TitleLine from '../../components/titleLine/TitleLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faFax,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <CommonHeader
        header='CONTACT US'
        text='We would like to hear your feedback! Please contact us due form below and we will get back to you as soon as possible!'
      />
      <div className='content-container'>
        <div className='content'>
          <div className='contact-form'>
            <div className='container'>
              <h1>CONTACT FORM</h1>
              <TitleLine />
              <form>
                <input placeholder='NAME' />
                <input placeholder='EMAIL' />
                <textarea placeholder='MESSAGE'></textarea>
                <button type='submit'>SUBMIT</button>
              </form>
            </div>
          </div>

          <div className='details-content'>
            <div className='fields'>
              <div className='field'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faLocationDot} />
                </div>
                <div className='info'>
                  <h1>Location</h1>
                  <span>
                    A830 Albyn Dr, Fort William<br></br> 30100 Scotland,GB
                  </span>
                </div>
              </div>
              <div className='field'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faPhone} />
                </div>
                <div className='info'>
                  <h1>Call</h1>
                  <span>+44 53 099 1611</span>
                  <span>+44 77 461 1308</span>
                </div>
              </div>
              <div className='field'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faEnvelope} />
                </div>
                <div className='info'>
                  <h1>MAIL</h1>
                  <span>admin@extonport.com</span>
                  <span>info@extonport.com</span>
                </div>
              </div>
              <div className='field'>
                <div className='icon-container'>
                  <FontAwesomeIcon className='icon' icon={faPhone} />
                </div>
                <div className='info'>
                  <h1>FAX</h1>
                  <span>44-848-465-1500</span>
                  <span>44-848-465-7784</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
