import React, { useState } from 'react';
import axios from 'axios';
import banner from '../assets/images/mybanner.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onFormSubmit, setError }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false)

  const isEmailValid = (email) => {
    // Implement email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const isPhoneValid = (phone) => {
    // Implement phone validation logic here
    return /^\d{11}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setError('Invalid email address');
      toast.warn('Invalid email address');
      return;
    }

    if (!isPhoneValid(phone)) {
      setError('Invalid phone number');
      toast.warn('Invalid phone number');
      return;
    }
    setSubmitting(true)

    try {
      await onFormSubmit(email, phone);
      // Clear the input fields after successful submission
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form.');
      toast.error('An error occurred while submitting the form.');
    } finally {
      // Reset the submission state to false, whether the submission succeeds or fails
      setSubmitting(false);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_control">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          placeholder="Enter Your E-mail"
        />
      </div>
      <div className="form_control">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          id="phone"
          placeholder="Your Phone Number"
        />
      </div>
      <button type="submit">{ submitting ? 'Submitting...' : 'Join Our Wait-list'}</button>
    </form>
  );
};

const Hero = () => {
  const [message, setMessage] = useState('');
  const apiURL = process.env.REACT_APP_API_URL;

  const postData = async (email, phone) => {
    try {
      const response = await axios.post(apiURL, {
        email: email,
        phone: phone,
      });

      if (response.data.status === 200) {
        toast.success('Thank you for joining our waitlist!');
        console.log('Very Good!')
      } else {
        const data = response.data;
        setMessage(data.message);
        toast(data.message)
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while submitting the form.');
      toast('An error occurred while submitting the form.');
    }
  };

  const handleFormSubmit = (email, phone) => {
    postData(email, phone);
  };
  console.log(message)

  return (
    <div>
      <div className="flex_container">
        <div className="flex_item">
          <h2>
            Going somewhere? Follow <span>MyRoute!</span>
          </h2>
          <p>
            Efficient, Economical and Eco-Friendly: Carpool with us and save time,
            money, and the environment amidst other exciting services we have for you.
            Download the MyRoute mobile app today!
          </p>
          <div className="form_container">
            <Form onFormSubmit={handleFormSubmit} setError={setMessage} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* {message === '' ? <>ni</> : <p>{message}</p>} */}
          </div>
        </div>
        <div className="flex_item">
          <img src={banner} alt="Hero Banner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
