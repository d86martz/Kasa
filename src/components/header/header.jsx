import NavBar from "../navBar/navBar";                      

import "./header.scss"                                      

import LogoImg from "../../assets/images/logo-210w.webp";   


const Header = () => {                                      
  return (                                                  
    <header>
      <div id="header-logo">
        <img        
          src={LogoImg}                                     
          alt="Logo de la société" />                       
      </div>
      <NavBar title="header-nav" />                         
    </header>
  );
};

export default Header;                                      
