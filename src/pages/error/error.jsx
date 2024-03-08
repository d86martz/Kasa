import {NavLink} from "react-router-dom";

import "./error.scss"

const Error = () => {
  return (
    <main id="error">
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  );
};

export default Error;
