import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderStyle } from './Header.style'

function Header() {
  return (
    <HeaderStyle>
            <div>
                <NavLink to={"/"}>FORSIDE</NavLink>
                <NavLink to={"/"}>PRODUKTER</NavLink>
                <h1>Bageriet</h1>
                <NavLink to={"/"}>KONTAKT</NavLink>
                <NavLink to={"/"}>LOGIN</NavLink>
            </div>
    </HeaderStyle>
  )
}

export default Header