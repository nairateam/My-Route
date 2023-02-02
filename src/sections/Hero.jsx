import React from 'react'
import banner from '../assets/images/mybanner.png'

const Hero = () => {
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
                    <form action="">
                        <div className="form_control">
                            <input type="email" name="email" id="email" placeholder='Enter Your E-mail' />
                        </div>
                        <div className="form_control">
                            <input type="tel" name="tel" id="tel" placeholder='Your Phone Number' />
                        </div>
                        <button>
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