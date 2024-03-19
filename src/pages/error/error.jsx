import {NavLink} from "react-router-dom";                                 //Import de la fonctionnalité de navigation NavLink la librairie React

import "./error.scss"                                                     

const Error = () => {                                                     
  const spanText = `Oups! La page que \n vous demandez n'existe pas.`;    //Création du span avec une balise permettant de couper la ligne à un endroit précis
  return (                                                                
    <main id="error">
      <h1>404</h1>                                                        
      <span>{spanText}</span>                                            
      <NavLink id="homeReturn" to="/">Retourner sur la page d'accueil</NavLink>           
    </main>
  );
};

export default Error;
