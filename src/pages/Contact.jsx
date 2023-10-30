import React, { useRef, useState } from 'react';
import validateName from '../utils/helper.js'
import emailjs from '@emailjs/browser';
import validateEmail from '../utils/helper.js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



function Contact () {
  const form = useRef();
  const [formData, setFormData] = useState({
    email: '', 
  })
  const [errors, setErrors] = useState({
    email: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) {
      //submit form data
      sendEmail(e);
    }
  }

  const validateForm = () => {
    let valid = true;

    //validate the email field
    const emailError = validateEmail(formData.email);
    if(emailError) {
      setErrors((prevErrors) => ({...prevErrors, email: emailError}));
      valid = false;
      toast.error('Email is required and must be valid.')
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: ''}))
    }
    return valid;

  }

  ;

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notValid, setValid] = useState(false);

  const resetText = () => {
    setName('');
    setEmail('');
    setMessage('');
    setValid(false);
  };

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
    }

      const nameSubmit = (e) => {
        setName(e.target.value)
        if(name) {
          setValid(false)
        }
      }

      const emailSubmit = (e) => {
        setEmail(e.target.value)
        if(email) {
          setValid(false)
        }
      }


      const messageSubmit = (e) => {
        setMessage(e.target.value)
        if(message) {
          setValid(false)
        }
      }


      const validate = (e) => {
        if(!e.target.value) {
          setValid(true)
        }
      }
  

  return (
    <form ref={form} onSubmit={handleSubmit} className='contactForm'>
      <label>Name</label>
      <input 
      type="text" 
      name="user_name" 
      value={name} 
      onChange={nameSubmit} 
      />
      <label>Email</label>
      <input 
      type='text' 
      name="user_email" 
      value={email} 
      onChange={emailSubmit} 
      />
      {errors.email && <div className='error'>{errors.email}</div>}
      <label>Message</label>
      <input
      type = 'text'
      name="message" 
      value={message} 
      onChange={messageSubmit} 
      />
      <button className='contactBtn' type="submit" >
          Send
        </button>
    </form>
  );
  };

export default Contact