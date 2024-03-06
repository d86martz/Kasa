import { NavLink } from "react-router-dom";

import NavBarList from "../../datas/navBarList.json";

const NavBar = (props) => {
  const navList = NavBarList.find((list) => list.title === props.title);
  return (
    <nav className={navList.title}>
      <ul className="navList">
        {navList.links.map((link => {
          return (
            <li key={link.key} className="navList-item">
              <NavLink to={`/${link.page}`}>{link.name}</NavLink>
            </li>
          );
        }))}
      </ul>
    </nav>
  );
};

export default NavBar;
