import { NavLink } from "react-router-dom";                                 //Import de la fonctionnalité de navigation la librairie React

import "./navBar.scss"                                                      

import NavBarList from "../../datas/navBarList.json";                       

const NavBar = (props) => {                                                 
  const navList = NavBarList.find((list => list.title === props.title));    //Verification du titre passé en paramètre.
  return (                                                                  
    <nav id="navBar">
      <ul>
        {navList.links.map((link => {                                       //Itération dans les données des liens
          return (                                                          
            <li key={link.name}>
              <NavLink activeClassName="active" to={`/${link.page}`}>{link.name}</NavLink>           
            </li>
          );
        }))}
      </ul>
    </nav>
  );
};

export default NavBar;                                                      
