import React from 'react'
import insta from '../assets/images/Icons/insta.png'
import twitter from '../assets/images/Icons/twitter.png'
import linkedin from '../assets/images/Icons/linkedin.png'

const Footer = () => {
  return (
    <div>
        <div className="footer" style={{borderTop: '1px solid rgb(230, 228, 228)'}}>
            <p>Copyright © 2023 MyRoute. All rights reserved</p>
            <div className="social_icons">
                <a href="https://instagram.com/myroute.ng">
                    <img src={insta} alt="Our Instagram" />
                </a>
                <a href="https://instagram.com/myroute.ng">
                    <img src={twitter} alt="Our Twitter" />
                </a>
                <a href="https://instagram.com/myroute.ng">
                    <img src={linkedin} alt="Our Linkedin" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer