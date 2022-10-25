import React from 'react';
import './commonHeader.scss';
const CommonHeader = (props) => {
  return (
    <div className='commonHeader'>
      <div className='ch-container'>
        <h1 className='ch-header'>{props.header}</h1>
        <div className='ch-line'></div>
        <p className='ch-text'>{props.text}</p>
      </div>
    </div>
  );
};

export default CommonHeader;
