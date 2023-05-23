import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderStyle } from './Header.style'

function Header() {
  return (
    <HeaderStyle>
            <div>
                <NavLink to={"/"}>FORSIDE</NavLink>
                <NavLink to={"/produkter"}>PRODUKTER</NavLink>
                <h1>Bageriet</h1>
                <NavLink to={"/kontakt"}>KONTAKT</NavLink>
                <NavLink to={"/login"}>LOGIN</NavLink>
            </div>
    </HeaderStyle>
  )
}

export default Header