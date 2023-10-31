import React, { useRef, useState } from 'react';
import { validateName, validateEmail} from '../utils/helper.js'
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



function Contact () {
  const form = useRef();
  const [formData, setFormData] = useState({
    email: '', 
    name: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    name: ''
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
      console.log('validated');
      sendEmail(e);
    }
  }

  const validateForm = () => {
    let isEmailValid = true;
    let isNameValid = true;

    //validate the email field
    const emailError = validateEmail(formData.email);
    if(emailError) {
      setErrors((prevErrors) => ({...prevErrors, email: emailError}));
      isEmailValid = false;
      toast.error('Email is required and must be valid.')
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: ''}))
    }
    

    const nameError = validateName(formData.name);
    if(nameError) {
      setErrors((prevErrors) => ({...prevErrors, name: nameError}));
      isNameValid = false;
      toast.error('Name is required and must be valid.')
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: ''}))
    }
    return isNameValid && isEmailValid;


  };

  
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // // const [notValid, setValid] = useState(false);

  // const resetText = () => {
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  //   setValid(false);
  // };

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',});
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('porfolio1', 'portfolio_template', form.current, 'RiL3vMh_6MN734yqq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

      // const nameSubmit = (e) => {
      //   setName(e.target.value)
      //   if(name) {
      //     setValid(false)
      //   }
      // }

      // const emailSubmit = (e) => {
      //   setEmail(e.target.value)
      //   if(email) {
      //     setValid(false)
      //   }
      // }


      // const messageSubmit = (e) => {
      //   setMessage(e.target.value)
      //   if(message) {
      //     setValid(false)
      //   }
      // }


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
      name="name" 
      value={formData.name} 
      onChange={handleInputChange} 
      />
      {errors.name && <div className='error'>{errors.name}</div>}
      <label>Email</label>
      <input 
      type='text' 
      name="email" 
      value={formData.email} 
      onChange={handleInputChange} 
      />
      {errors.email && <div className='error'>{errors.email}</div>}
      <label>Message</label>
      <textarea
      type = 'text'
      name="message" 
      value={formData.message} 
      onChange={handleInputChange} 
      />
      <button className='contactBtn' type="submit" >
          Send
        </button>
    </form>
  );
  };

export default Contact