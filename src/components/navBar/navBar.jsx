import React from "react";
import { NavLink } from "react-router-dom";

import NavBarList from "../../datas/navBarList.json"

const NavBar = (props) => { 
  const navList = NavBarList.find((list => list.title === props.title))
  return (
    <nav className={navList.title}>
      <ul>
        {navList.items.map(({name, page}) => {
          return (
            <li>
              <NavLink to={`/${page}`}>{name}</NavLink> 
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar;
