import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Truck from '../../assets/truck.jpg';
import Warehouse from '../../assets/warehouse.jpg';
import Load from '../../assets/load.jpg';
import Special from '../../assets/special.jpg';
import Scania from '../../assets/scania.jpeg';
import daf from '../../assets/daf.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTruck,
  faWarehouse,
  faWeightHanging,
  faTruckFast,
  faPallet,
  faLocationCrosshairs,
  faBox,
  faGlobe,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import TitleLine from '../../components/titleLine/TitleLine';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header' id='home'>
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
          <a href='/#request'>
            <button className='home-header--btn_filled'>
              GET STARTED TODAY
            </button>
          </a>
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
              <h2 className='features-title'>Load Transport</h2>
              <span className='feature-text'>
                Our set-up and expertise will ensure that your goods will arrive
                in perfect condition, every time.
              </span>
            </div>
            <div className='feature-element'>
              <img className='feature-image' src={Special} alt='truck' />
              <h2 className='features-title'>Special Cargo</h2>
              <span className='feature-text'>
                Our extensive special cargo fleet includes extendable flatbed
                trailers, low loaders
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
            <div className='highlights-img--container'>
              <img className='highlights-img' src={daf} alt='' />
            </div>
            <div className='highlights'>
              <div className='highlights-title'>
                <h1>Core Values</h1>
              </div>
              <div className='highlights-list'>
                <div className='highlights-list--element'>
                  <div className='icon'>
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                  </div>
                  <span>
                    A commitment to sustainability and to acting in an
                    envirement friendly way
                  </span>
                </div>
                <div className='highlights-list--element'>
                  <div className='icon'>
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                  </div>
                  <span>
                    A commitment to provide innovation and excellence through
                    our extraordinary services
                  </span>
                </div>
                <div className='highlights-list--element'>
                  <div className='icon'>
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                  </div>
                  <span>
                    A commitment to doing good for the whole world and to bring
                    huge value for the whole generation
                  </span>
                </div>
                <div className='highlights-list--element'>
                  <div className='icon'>
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                  </div>
                  <span>
                    A commitment to helping everyone regardless of age, gender,
                    religion, status, etc.
                  </span>
                </div>
                <div className='highlights-list--element'>
                  <div className='icon'>
                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                  </div>
                  <span>
                    A commitment to building strong relations with our customers
                    through our great work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='services' className='services'>
        <div className='services-container'>
          <h1 className='service-title'>Our Services</h1>
          <TitleLine />
          <div className='services-list'>
            <div className='single-service'>
              <div className='icon-container'>
                <FontAwesomeIcon className='icon' icon={faTruck} />
              </div>
              <div className='detail'>
                <h1 className='detail-title'>Transport</h1>
                <span className='detail-text'>
                  We transport your cargo all around the country
                </span>
              </div>
            </div>
            <div className='single-service'>
              <div className='icon-container'>
                <FontAwesomeIcon className='icon' icon={faWarehouse} />
              </div>
              <div className='detail'>
                <h1 className='detail-title'>Warehousing</h1>
                <span className='detail-text'>
                  We storage your products safely and for a long time
                </span>
              </div>
            </div>
            <div className='single-service'>
              <div className='icon-container'>
                <FontAwesomeIcon className='icon' icon={faWeightHanging} />
              </div>
              <div className='detail'>
                <h1 className='detail-title'>Heavy weight </h1>
                <span className='detail-text'>
                  We transport your large and heavy cargo safely
                </span>
              </div>
            </div>
            <div className='single-service'>
              <div className='icon-container'>
                <FontAwesomeIcon className='icon' icon={faTruckFast} />
              </div>
              <div className='detail'>
                <h1 className='detail-title'>Express cargo</h1>
                <span className='detail-text'>
                  Fast shipping option for your urgent deliveries
                </span>
              </div>
            </div>
            <div className='single-service'>
              <div className='icon-container'>
                <FontAwesomeIcon className='icon' icon={faLocationCrosshairs} />
              </div>
              <div className='detail'>
                <h1 className='detail-title'>cargo tracking</h1>
                <span className='detail-text'>
                  You can track your cargo anytime and anywhere
                </span>
              </div>
            </div>
            <div className='single-service'>
              <div className='icon-container'>
                <FontAwesomeIcon className='icon' icon={faPallet} />
              </div>
              <div className='detail'>
                <h1 className='detail-title'>Pallet Hiring</h1>
                <span className='detail-text'>
                  Rent the pallet as much as you need to transport your cargo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='stats' id='stats'>
        <div className='container'>
          <h1 className='stats-title'>OUR STATS</h1>
          <TitleLine />
          <div className='stats-container'>
            <div className='stat'>
              <div className='icon-conatiner'>
                <FontAwesomeIcon className='icon' icon={faBox} />
              </div>
              <h1 className='heading'>+10000</h1>
              <span>Packages Stored </span>
            </div>
            <div className='stat push '>
              <div className='icon-conatiner  '>
                <FontAwesomeIcon className='icon' icon={faSmile} />
              </div>
              <h1 className='heading'>+350</h1>
              <span>Happy Clients </span>
            </div>
            <div className='stat '>
              <div className='icon-conatiner'>
                <FontAwesomeIcon className='icon' icon={faTruck} />
              </div>
              <h1 className='heading '>+3500</h1>
              <span>Delivery Complated </span>
            </div>
            <div className='stat push'>
              <div className='icon-conatiner'>
                <FontAwesomeIcon className='icon' icon={faGlobe} />
              </div>
              <h1 className='heading'>+50000</h1>
              <span>Miles Traveled </span>
            </div>
          </div>
        </div>
      </div>
      <div className='request' id='request'>
        <div className='container'>
          <div className='info'>
            <h1>REQUEST A SERVICE</h1>
            <TitleLine />
            <p>
              Fill the service form with details and we will back to you as soon
              as possible
            </p>
            <ul className='steps'>
              <div className='step'>
                <div className='icon'>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <span>7/24 Costumer Support</span>
              </div>
              <div className='step'>
                <div className='icon'>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <span>Fast response</span>
              </div>
              <div className='step'>
                <div className='icon'>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <span>Active Everyday</span>
              </div>
            </ul>
          </div>
          <div className='form-container'>
            <form>
              <input type='text' required placeholder='NAME' />
              <input type='email' required placeholder='EMAIL' />
              <input type='text' required placeholder='LOCATION' />
              <input type='text' required placeholder='SERVICE NAME' />
              <input type='text' required placeholder='BUDGET' />
              <button type='submit'>REQUEST A SERVICE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
