// import headerNav from "../navBar/navBar";

const Header = () => {
  return (
    <header>
      <img
        src="../../assets/images/logo-210w.webp"
        srcset="../../assets/images/logo-150w.webp, ../../assets/images/logo-210w.webp"
        sizes="(max-width:600px) 150px, 210px"
        alt="Logo de la société"
        classname="header-logo"
      />
      <div>jusque la ça marche</div>
      {/* <headerNav /> */}
    </header>
  );
};
export default Header;