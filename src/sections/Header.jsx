import React from 'react'
import logo from '../assets/images/route.png'

const Header = () => {
  return (
    <div>
        <header>
            <img src={logo} alt="My Route" />
            <div className="socials">
                <button>Coming Soon</button>
            </div>
        </header>
    </div>
  )
}

export default Header