import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Truck from '../../assets/truck.jpg';
import Warehouse from '../../assets/warehouse.jpg';
import Load from '../../assets/load.jpg';
import Special from '../../assets/special.jpg';
import Scania from '../../assets/scania.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header--container'>
          <h1 className='home-header--title'>
            Extonport Transportation and warehousing services
          </h1>
          <div className='home-header--line'></div>
          <p className='home-header--text'>
            Extonport delivering your goods, in the right quantity, at the right
            time and in the right place.Strategically placed terminals, ferry
            routes on a fixed schedule and high-frequency rail services will
            assure the best multimodal transport solution for your cargo.
          </p>
          <Link to='/'>
            <button className='home-header--btn_filled'>
              GET STARTED TODAY
            </button>
          </Link>
          <Link to='/about'>
            <button className='home-header--btn_trans'>ABOUT US</button>
          </Link>
        </div>
      </div>
      <div className='features'>
        <div className='features-container'>
          <div className='features-content'>
            <div className='feature-element'>
              <img className='feature-image' src={Truck} alt='' />
              <h2 className='features-title'>Transportation</h2>
              <span className='feature-text'>
                We are at your service all over Scotland with our wide transport
                network
              </span>
            </div>
            <div className='feature-element'>
              <img className='feature-image' src={Warehouse} alt='' />
              <h2 className='features-title'>Warehousing</h2>
              <span className='feature-text'>
                We store, transport and manage all your processes at our own
                warehouses.
              </span>
            </div>
            <div className='feature-element'>
              <img className='feature-image' src={Load} alt='' />
              <h2 className='features-title'>Full Load Transport</h2>
              <span className='feature-text'>
                Whether you have a full truck load (FTL) or a full container
                load (FCL), our set-up and expertise will ensure that your goods
                will arrive in perfect condition, every time.
              </span>
            </div>
            <div className='feature-element'>
              <img className='feature-img' src={Special} alt='truck' />
              <h2 className='features-title'>Special Cargo</h2>
              <span className='feature-text'>
                Our extensive special cargo fleet includes extendable flatbed
                trailers, low loaders, extendable and regular semi low loaders,
                concrete carriers, escort vehicles, mega and standard flatbed
                trailers, as well as Kuip trailers.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='story'>
        <div className='story-container'>
          <div className='info'>
            <h1 className='info-title'>Our Story</h1>
            <div className='home-header--line'></div>
            <p className='info-text'>
              We are a customs bonded trucking and warehousing company and we
              have been in service for over 20 years and are fully committed to
              providing the best service for our customers.<br></br>
              <br></br>
              We started our journey in 1982 and we are located in Ireland and
              specialize in trucking and warehousing.
            </p>
            <Link className='info-link' to='/about'>
              MORE ABOUT US
            </Link>
          </div>
          <div className='highlights-content'>
            <div className='highlights-img'>
              <img src={Scania} alt='' />
            </div>
            <div className='highlights'>
              <div className='highlights-title'></div>
              <div className='highlights-list'>
                <div className='highlights-list--element'>
                  <FontAwesomeIcon icon='fa-regular fa-circle-check' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
