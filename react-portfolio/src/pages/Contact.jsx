import React from 'react';
import { useRef, useState } from 'react';

import {Form, Button, Alert, Toast} from 'react-bootstrap';

function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [notValid, setValid] = useState(false)

const resetTextInput = () => {
setName('');
setEmail('');
setMessage('')
setValid(false);
}
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_c11h62j', 'template_ip3tmcj', form.current, 'TKcD44TlqgbHvRHtz')
  .then((result) => {
    console.log(result.text);
    resetTextInput();
  }, (error) => {
    console.log(error.text);
  });


};

const nameSubmit = (e) => {
  setName(e.target.value)
  if (name) {
    setValid(false)
  }
}

const emailSubmit = (e) => {
  setEmail(e.target.value)
  if (email) {
    setValid(false)
  }
}

const messageSubmit = (e) => {
  setMessage(e.target.value)
  if (message) {
    setValid(false)
  }
}

const validateEntry = (e) => {
  if (!e.target.value) {
    setValid(true)
  }
}

  return (
    
    
    <div className='container contactCard'>
      <div className='row'>
      <div className='col-12 d-flex justify-content-center'>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label className='contactLabel'>Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            className='contactInput'
            value={name}
            onChange={nameSubmit}
            onMouseOut={validateEntry}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='contactLabel'>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            className='contactInput'
            value={email}
            onChange={emailSubmit}
            onMouseOut={validateEntry}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='contactLabel '>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            type="submit"
            className='contactInput '
            value={message}
            onChange={messageSubmit}
            onMouseOut={validateEntry}
          />
        </Form.Group>
        {notValid && (
            <Toast className='contactInput container' variant="info">
          
          </Toast>
        )}
        <Button className='contactBtn' type="submit" >
          Send
        </Button>
      </Form>
      </div>
      </div>
    </div>
  )
}

export default Contact