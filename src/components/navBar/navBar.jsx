import { NavLink } from "react-router-dom";                                 //Import de la fonctionnalité de navigation la librairie React

import "./navBar.scss"                                                      //Import de la feuille de style

import NavBarList from "../../datas/navBarList.json";                       //Import de l'objet contenant les données des liens

const NavBar = (props) => {                                                 //Création d'un composant NavBar selon paramètres
  const navList = NavBarList.find((list => list.title === props.title));    //Constante pour verifier si le titre passé en paramètre correspond à une liste dans l'objet.
  return (                                                                  //Ajout au DOM
    <nav id="navBar">
      <ul>
        {navList.links.map((link => {                                       //Itération dans l'objet contenant les données des liens, pour chaque lien:
          return (                                                          //Ajout au DOM
            <li key={link.name}>
              <NavLink to={`/${link.page}`}>{link.name}</NavLink>           {/*Ajout dun lien vers la page et son nom*/}
            </li>
          );
        }))}
      </ul>
    </nav>
  );
};

export default NavBar;                                                      
