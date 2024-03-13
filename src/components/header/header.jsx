import NavBar from "../navBar/navBar";                      //Import du composant NabBar

import "./header.scss"                                      //Import de la feuille de style

import LogoImg from "../../assets/images/logo-210w.webp";   //Import de l'image LogoImg


const Header = () => {                                      //Création d'un composant Header
  return (                                                  //Ajout au DOM
    <header>
      <div id="header-logo">
        <img        
          src={LogoImg}                                     //Ajout de l'image FooterImg
          alt="Logo de la société" />                       
      </div>
      <NavBar title="header-nav" />                         {/*Ajout du composant NavBar avec un paramètre title */}
    </header>
  );
};

export default Header;                                      //Exportation du composant
