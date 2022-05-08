import React from 'react'
import Bars from '../svgs/Bars'
import Logo from '../svgs/Logo'
import './header.css'
function Header () {
  return (
    <header className="header">
      <div className="header__container">
        <Bars className="header__bars" width={20} heigth={20}/>
        <Logo className="cashforce" width={150} heigth={150}/>
      </div>
    </header>
  )
}

export default Header
