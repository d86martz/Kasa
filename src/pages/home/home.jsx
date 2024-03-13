import Banner from "../../components/banner/banner";               //Import du composant Banner
import Gallery from "../../components/gallery/gallery";            //Import du composant Gallery

import BannerImg from "../../assets/images/banner_1-1240w.webp";   //Import de l'image BannerImg

import "./home.scss"                                               //Import de la feuille de style

const Home = () => {
  const title = `Chez vous, \n partout et ailleurs`;               //Création du titre avec une balise permettant de couper la ligne à un endroit précis
  return (
    <main id="home">                                        
      <Banner                                                      //Ajout du composant Banner
        image={BannerImg}
        title={title}
      />
      <Gallery />                                                  {/* Ajout du composant Gallery */}
    </main>
  );
};

export default Home;
