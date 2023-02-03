import React, { useState } from 'react'
import banner from '../assets/images/mybanner.png'
import axios from 'axios';


const Hero = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
        personalizations: [
          {
            to: [
              {
                email: 'onabulefemi@gmail.com',
              },
            ],
            subject: 'Waitlist Signup',
          },
        ],
        from: {
          email: 'waitlist@example.com',
        },
        content: [
          {
            type: 'text/plain',
            value: `Email: ${email}\nPhone: ${phone}`,
          },
        ],
      }, {
        headers: {
          Authorization: 'Bearer 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',
        },
      });
      setMessage('Successfully added to the waitlist');
    } catch (error) {
      setMessage('Failed to add to the waitlist');
    }
  };


  return (
    <div>
        <div className="flex_container">
            <div className="flex_item">
                <h2>
                    Going somewhere? Follow <span>MyRoute!</span>
                </h2>
                <p>
                    Efficient, Economical and Eco-Friendly: Carpool with us and save time, money, 
                    and the environment amidst other exciting services we have for you. 
                    Download the MyRoute mobile app today!
                </p>
                <div className="form_container">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form_control">
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                            name="MERGE0" id="MERGE0" placeholder='Enter Your E-mail' />
                        </div>
                        <div className="form_control">
                            <input type="tel" value={phone} 
                            onChange={e => setPhone(e.target.value)}
                            name="MERGE4" id="MERGE4" placeholder='Your Phone Number' />
                        </div>
                        <button type='submit'>
                            Join Our Wait-list
                        </button>
                        {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
            <div className="flex_item">
                <img src={banner} alt="Hero Banner" />
            </div>
        </div>
    </div>
  )
}

export default Hero