import React, { useState } from 'react'
import banner from '../assets/images/mybanner.png'

const Hero = () => {
const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://us3.api.mailchimp.com/3.0/lists/5968090d71/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "apikey 29ea16558655fe049d0cdc1b38279f60-us3"
        },
        body: JSON.stringify({
          email_address: email,
          status: "pending",
          merge_fields: {
            PHONE: phone
          }
        })
      });
      const data = await response.json();
      if (data.status === 400) {
        throw new Error(data.detail);
      }
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
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
                        {success && <p>Thank you for joining the waitlist!</p>}
                        {error && <p>Error: {error}</p>}
                        <div className="form_control">
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                            disabled={submitting} name="MERGE0" id="MERGE0" placeholder='Enter Your E-mail' />
                        </div>
                        <div className="form_control">
                            <input type="tel" value={phone} 
                            onChange={e => setPhone(e.target.value)}
                            disabled={submitting} name="MERGE4" id="MERGE4" placeholder='Your Phone Number' />
                        </div>
                        <button type='submit' disabled={submitting}>
                            Join Our Wait-list
                        </button>
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