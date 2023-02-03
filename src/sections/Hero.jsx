import React, { useState } from 'react'
import banner from '../assets/images/mybanner.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const postData = async (email, phone, message) => {
        await fetch('https://myroute-eac81-default-rtdb.firebaseio.com/myroute.json', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                phone: phone,

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
             },
        })
        .then((response) => response.json())
        .then(() => {
         setEmail('');
         setPhone('');
         setMessage(toast.success('Thank You For Joining Our Wait-list!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }));
      })
      .catch((err) => {
         console.log(err.message);
         setMessage(err.message);   
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(email, phone, message);
        console.log(email, phone, message)
     };
  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log({
    //       email,
    //       phone,
    //     });
    //     setEmail("");
    //     setPhone("");
    //   };


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
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            />
                        {/* {message && <p>{message}</p>} */}
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