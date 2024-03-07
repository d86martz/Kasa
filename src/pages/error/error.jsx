import {NavLink} from "react-router-dom";

const Error = () => {
  return (
    <main>
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  );
};

export default Error;
