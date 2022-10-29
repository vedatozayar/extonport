import React from 'react';
import './careers.scss';
import CommonHeader from '../../components/commonHeader/CommonHeader';
import TitleLine from '../../components/titleLine/TitleLine';
import Cultureimg from '../../assets/culture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faHeartPulse,
  faDollarSign,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
const Careers = () => {
  return (
    <div className='careers' id='careers'>
      <CommonHeader
        header='CAREERS'
        text='We carefully select new talents that will shape our future and improve our quality.'
      />
      <div className='culture' id='culture'>
        <div className='container'>
          <h1>JOIN OUR TEAM</h1>
          <TitleLine />
          <div className='content'>
            <div className='img-cont'>
              <img src={Cultureimg} alt='culture' />
            </div>
            <div className='msg'>
              <h1>Wanna work with us?</h1>
              <TitleLine />
              <p>
                At Extonport, you will feel like part of a family and enjoy the
                many benefits that come with being a part of our team including
                great pay for every team member. We are dedicated to taking care
                of our people and giving them the opportunity they deserve to
                achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='perks' id='perks'>
        <div className='container'>
          <h1>OUR PERKS</h1>
          <TitleLine />
          <div className='cards'>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faMugHot} />
              <span> Free lunch and snacks for everyone</span>
            </div>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faDollarSign} />
              <span>
                Competative salary so you don't have to worry financially
              </span>
            </div>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faHeartPulse} />
              <span>Free health insurence for everyone</span>
            </div>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faSmile} />
              <span>Warm and friendly working environment</span>
            </div>
          </div>
        </div>
      </div>
      <div className='join' id='join'>
        <div className='container'>
          <h1>WANNA JOIN US?</h1>
          <TitleLine />
          <p>
            Come join us, we are looking for logistics experts that can help us
            to grow together. If you feel like you can be a great fit then send
            us your resume on
            <span>admin@extonport.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
