import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../utils/helpers';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message, show } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className=' flex justify-center items-center'>
          <form
            id='contact-form'
            className=' flex flex-col w-full md:w-1/2'
            action='https://getform.io/f/039a0fa5-2ea6-47c3-bbdb-2e5d3e500b88'
            method='POST'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              onBlur={handleChange}
              defaultValue={name}
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              defaultValue={email}
              onBlur={handleChange}
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              defaultValue={message}
              onBlur={handleChange}
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>
            {errorMessage && (
              <div>
                <p className='text-red-200'>
                  {capitalizeFirstLetter(errorMessage)}
                </p>
              </div>
            )}
            {show && (
              <div id='success'>
                <p className='text-green-400'>
                  {capitalizeFirstLetter('Message Send')}
                </p>
              </div>
            )}
            <button
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
              value='Send'
              onSubmit={handleChange}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
