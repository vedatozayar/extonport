import React from 'react';
import CommonHeader from '../../components/commonHeader/CommonHeader';

import './about.scss';
const About = () => {
  return (
    <div className='about'>
      <CommonHeader
        header={'About Us'}
        text={
          'We are here to serve you with our modern and sustainable equipment,technology, and solutions, to give our customers and partners peace of mind in changing times'
        }
      />
    </div>
  );
};

export default About;
