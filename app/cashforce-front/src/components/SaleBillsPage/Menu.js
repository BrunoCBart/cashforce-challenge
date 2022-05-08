import React, { useEffect } from 'react'
import Arrow from '../svgs/Arrow'
import HandShakeMenu from '../svgs/HandShakeMenu'
import Logo from '../svgs/Logo'
import './menu.css'
function Menu () {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const menu = document.querySelector('.saleBills-menu')
      menu.classList.add('saleBills-menu--open')
    }
  }, [])
  return (
    <section className="saleBills-menu">
      <div className="saleBills__hero-container">
        <Arrow width={18} heigth={18}/>
        <Logo width={150} heigth={150}/>
      </div>
      <div className="saleBills-menu-nav-container">
        <nav className="saleBills-menu__nav">
          <ul className="saleBills-menu__list">
            <li className="saleBills-menu__item">
              <HandShakeMenu width={25} heigth={25} fill="none"/>
              <a href="#" className="saleBills-menu__link">
                Notas Fiscais
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Menu
