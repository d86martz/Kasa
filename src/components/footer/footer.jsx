import FooterImg from "../../assets/images/footer-1440w.webp";
import FooterImgMobile from "../../assets/images/footer-375w.webp";

const Footer = () => {
  return (
    <footer>
      <img
        src={FooterImg}
        srcSet={`${FooterImgMobile} 375w, ${FooterImg} 1440w`}
        sizes="(max-width:375px) 375px, 1440px"
        alt="Logo de la société"
        className="footer-logo"
      />
    </footer>
  );
};

export default Footer;