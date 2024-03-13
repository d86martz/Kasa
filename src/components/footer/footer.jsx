import FooterImg from "../../assets/images/white-logo-210w.webp";   //Import de l'image FooterImg

import "./footer.scss"                                              //Import de la feuille de style

const Footer = () => {                                              //Création d'un composant Footer
  const spanText = `© 2020 Kasa. All \n rights reserved`;           //Création du span avec une balise permettant de couper la ligne à un endroit précis
  return (                                                          //Ajout au DOM
    <footer>
      <img src={FooterImg}                                          
      alt="Logo de la société"/>                                    
      <span>{spanText}</span>                                      
    </footer>
  );
};

export default Footer;                                              