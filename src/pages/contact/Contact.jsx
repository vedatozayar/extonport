import React from 'react';
import './contact.scss';
import CommonHeader from '../../components/commonHeader/CommonHeader';
import TitleLine from '../../components/titleLine/TitleLine';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <CommonHeader
        header='CONTACT US'
        text='We would like to hear your feedback! Please contact us due form below and we will get back to you as soon as possible!'
      />
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
    </div>
  );
};

export default Contact;
