import React from 'react';
import emailjs from '@emailjs/browser';

const WhatsApp = () => {


  var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.send('service_hystxwd', 'template_i5xes79', templateParams, 'ZRDG7FavmHtvJDklh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <button onClick={(e)=>sendEmail(e)}>Send</button>
  );
};
export default WhatsApp;