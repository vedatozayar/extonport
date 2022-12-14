import React from 'react';
import CommonHeader from '../../components/commonHeader/CommonHeader';
import Founder from '../../assets/about-msg.jpeg';
import mem1 from '../../assets/mem1.jpg';
import mem2 from '../../assets/mem2.jpg';
import mem3 from '../../assets/mem3.jpeg';
import gal1 from '../../assets/gal1.jpg';
import gal2 from '../../assets/gal2.jpg';
import gal3 from '../../assets/gal3.jpg';
import gal4 from '../../assets/gal4.jpg';
import gal5 from '../../assets/gal5.png';
import gal6 from '../../assets/gal6.jpeg';
import gal7 from '../../assets/gal7.png';
import gal8 from '../../assets/gal8.jpg';

import './about.scss';
import Sign from '../../assets/signature.png';
import './about.scss';
import TitleLine from '../../components/titleLine/TitleLine';
import testi1 from '../../assets/testi1.jpg';
import testi2 from '../../assets/testi2.jpg';
import testi3 from '../../assets/testi3.jpg';
import testi4 from '../../assets/testi4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div className='about'>
      <CommonHeader
        header={'About Us'}
        text={
          'We are here to serve you with our modern and sustainable equipment,technology, and solutions, to give our customers and partners peace of mind in changing times'
        }
      />
      <div className='about-msg' id='about-msg'>
        <div className='container'>
          <div className='img-container'>
            <img src={Founder} alt='founder' />
          </div>
          <div className='msg-cont'>
            <h2>OUR MESSAGE</h2>
            <TitleLine />
            <p>
              At Extonport, the importance we place on customer satisfaction and
              service quality has brought us to a higher quality and respectable
              position in the market compared to our competitors since 1982.
            </p>
            <div className='signature-cont'>
              <img src={Sign} alt='signature' />
            </div>
          </div>
        </div>
      </div>
      <div className='testimonial' id='testimonial'>
        <div className='container'>
          <h2>CLIENTS REVIEW</h2>
          <TitleLine />
          <div className='reviews'>
            <div className='review'>
              <div className='client-info'>
                <div className='img-cont'>
                  <img src={testi1} alt='testi1' />
                </div>
                <div className='client-name'>
                  <h4>Richard Hughes</h4>
                  <h6>Community Head</h6>
                </div>
              </div>
              <div className='rating'>
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
              </div>
              <p>
                Thank you for fast and certain delivery of our
                products.Definetly excellent job and service.Extonport is by far
                our best business partner when it comes to transport.
              </p>
            </div>
            <div className='review'>
              <div className='client-info'>
                <div className='img-cont'>
                  <img src={testi2} alt='testi1' />
                </div>
                <div className='client-name'>
                  <h4>Taliah Moran</h4>
                  <h6>Senior Sales Manager</h6>
                </div>
              </div>
              <div className='rating'>
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
              </div>
              <p>
                Just a quick note to acknowledge the outstanding service
                supplied by Tony Pachel with his follow up on e-mails, bills of
                lading, requests for pricing and his amazing pursuit of late
                freight forwarders. It is a pleasure to work with him.
              </p>
            </div>
            <div className='review'>
              <div className='client-info'>
                <div className='img-cont'>
                  <img src={testi3} alt='testi1' />
                </div>
                <div className='client-name'>
                  <h4>Kevin Patel</h4>
                  <h6>Executive Director</h6>
                </div>
              </div>
              <div className='rating'>
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
              </div>
              <p>
                The Extonport logistics team is amazing. Professional, timely,
                communicative. They work seamlessly and when troubleshooting is
                needed, they always find the right solution.
              </p>
            </div>
            <div className='review'>
              <div className='client-info'>
                <div className='img-cont'>
                  <img src={testi4} alt='testi1' />
                </div>
                <div className='client-name'>
                  <h4>Lleyton Riggs</h4>
                  <h6>Project Manager ??? Strategic Sourcing</h6>
                </div>
              </div>
              <div className='rating'>
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
              </div>
              <p>
                I want to express my appreciation to your team for their support
                for a Mexico shipment for a list of machines and fixtures that
                were delivered today.This shipment is the first batch of a
                larger list. I will keep Extonport in mind for the remaining
                items on the list as well as future international
                shipments.Thanks again.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='team' id='team'>
        <div className='container'>
          <h1>OUR TEAM</h1>
          <TitleLine />
          <div className='members'>
            <div className='member'>
              <img src={mem1} alt='mem1' />
              <div className='member-details'>
                <h2>Tommy EXTON</h2>
                <h3>FOUNDER AND CEO</h3>
              </div>
            </div>
            <div className='member'>
              <img src={mem2} alt='mem1' />
              <div className='member-details'>
                <h2>DEXTER EXTON </h2>
                <h3>VICE PRESIDENT</h3>
              </div>
            </div>
            <div className='member'>
              <img src={mem3} alt='mem1' />
              <div className='member-details'>
                <h2>SIMON EXTON</h2>
                <h3>MANAGEMENT HEAD</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='gallery' id='gallery'>
        <div className='container'>
          <h1>OUR GALLERY</h1>
          <TitleLine />
          <div className='images'>
            <div className='img'>
              <img src={gal1} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal2} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal3} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal4} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal5} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal6} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal7} alt='galleryimg1' />
            </div>
            <div className='img'>
              <img src={gal8} alt='galleryimg1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
