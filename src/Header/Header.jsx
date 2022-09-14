import React from 'react'
import "./Header.css"
import Logo from "../../src/logo.gif"

const Header = ({score}) => {
  return (
    <div className='Header'>
      <div className="head"><h1>Welcome Tunji! </h1><img src={Logo} alt="" /></div>

      <div className="score"><h1>Score: {score}</h1></div>
      
      
    </div>
  )
}

export default Header