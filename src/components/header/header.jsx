import NavBar from "../navBar/navBar";

import "./header.scss"

import Logo_d from "../../assets/images/logo-210w.webp";
import Logo_m from "../../assets/images/logo-150w.webp";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img
          src={Logo_d}
          srcSet={`${Logo_m} 150w, ${Logo_d} 210w`}
          sizes="(max-width:375px) 150px, 210px"
          alt="Logo de la société"
        />
      </div>
      <NavBar title="header-nav" />
    </header>
  );
};

export default Header;
