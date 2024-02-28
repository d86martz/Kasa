// import headerNav from "../navBar/navBar";
import Image from "../../assets/images/logo-210w.webp";
const Header = () => {
  return (
    <header>
      {Image}
      <div class="header-logo">
        <img
          src={"../../assets/images/logo-210w.webp"}
          srcset={"../../assets/images/logo-150w.webp 150w, ../../assets/images/logo-210w.webp 210w"}
          sizes="(max-width:600px) 150px, 210px"
          alt="Logo de la société"
          classname="header-logo"
        />
      </div>
      {/* <headerNav /> */}
    </header>
  );
};

export default Header;