import "./about.scss"                                                                            //Import de la feuille de style

import BannerImg from "../../assets/images/banner_2-1440w.webp";                                 //Import de l'image BannerImg

import Banner from "../../components/banner/banner";                                             //Import du composant Banner
import Collapse from "../../components/collapse/collapse";                                       //Import du composant Collapse

import AboutCollapses from "../../datas/aboutCollapses.json";                                    //Import de l'objet contenant le contenu des collapses

const About = () => {                                                                            //Création d'un composant About
  return (                                                                                       //Ajout au DOM
    <main id="about">
      <Banner                                                                                    //Ajout du composant Banner
        className="banner"                                                                       //Attribution d'une classe
        image={BannerImg}                                                                        //Ajout de l'image BannerImg
      />
      <div id="aboutCollapses">                                                                  {/*Ajout du composant NavBar avec un paramètre title */}
        {AboutCollapses.map((collapse =>                                                         //Itération dans la liste des collapses, pour chaque collapse:
          <Collapse key={collapse.title} title={collapse.title} content={collapse.content} />    //Ajout du composant Collapse avec les paramètres title et content du collapse
        ))}
      </div>
    </main>
  );
};

export default About;                                                                            //Exportation du composant