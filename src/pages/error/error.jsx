import {NavLink} from "react-router-dom";                                 //Import de la fonctionnalité de navigation NavLink la librairie React

import "./error.scss"                                                     //Import de la feuille de style

const Error = () => {                                                     
  const spanText = `Oups! La page que \n vous demandez n'existe pas.`;    //Création du span avec une balise permettant de couper la ligne à un endroit précis
  return (                                                                //Ajout au DOM
    <main id="error">
      <h1>404</h1>                                                        
      <span>{spanText}</span>                                            
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>           {/* Redirection vers la page d'accueil */}
    </main>
  );
};

export default Error;
