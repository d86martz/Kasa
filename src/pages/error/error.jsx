import {NavLink} from "react-router-dom";

import "./error.scss"

const Error = () => {
  const span = `Oups! La page que \n vous demandez n'existe pas.`;
  return (
    <main id="error">
      <h1>404</h1>
      <span>{span}</span>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  );
};

export default Error;
