import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function Contact () {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notValid, setValid] = useState(false);

  const resetText = () => {
    setName('');
    setEmail('');
    setMessage('');
    setValid(false);
  }

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',});
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('REACT_APP_SERVICE_ID', 'REACT_APP_TEMPLATE_ID', form.current, 'REACT_APP_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact