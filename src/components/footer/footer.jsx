import FooterImg from "../../assets/images/white-logo-210w.webp";

import "./footer.scss"

const Footer = () => {
  const title = `© 2020 Kasa. All \n rights reserved`;
  return (
    <footer>
      <img src={FooterImg}
      alt="Logo de la société"/>
      <span>{title}</span>
    </footer>
  );
};

export default Footer;