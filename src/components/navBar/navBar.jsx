import { NavLink } from "react-router-dom";

import "./navBar.scss"

import NavBarList from "../../datas/navBarList.json";

const NavBar = (props) => {
  const navList = NavBarList.find((list => list.title === props.title));
  return (
    <nav id="navBar">
      <ul>
        {navList.links.map((link => {
          return (
            <li key={link.name}>
              <NavLink to={`/${link.page}`}>{link.name}</NavLink>
            </li>
          );
        }))}
      </ul>
    </nav>
  );
};

export default NavBar;
