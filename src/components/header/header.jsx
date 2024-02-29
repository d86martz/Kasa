import HeaderNav from "../navBar/navBar";
import Logo_d from "../../assets/images/logo-210w.webp"
import Logo_m from "../../assets/images/logo-150w.webp"

const Header = () => {
  return (
    <header>
      <div class="header-logo">
        <img
          src={Logo_d}
          srcset={`${Logo_m} 150w, ${Logo_d} 210w`}
          sizes="(max-width:600px) 150px, 210px"
          alt="Logo de la société"
          classname="header-logo"
        />
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;