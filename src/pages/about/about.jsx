import "./about.scss"                                                                            

import BannerImg from "../../assets/images/banner_2-1440w.webp";                                 

import Banner from "../../components/banner/banner";                                             
import Collapse from "../../components/collapse/collapse";                                       

import AboutCollapses from "../../datas/aboutCollapses.json";                                    

const About = () => {                                                                            
  return (                                                                                       
    <main id="about">
      <Banner                                                                                    
        className="banner"                                                                       
        image={BannerImg}                                                                        
      />
      <div id="aboutCollapses">                                                                  
        {AboutCollapses.map((collapse =>                                                         
          <Collapse key={collapse.title} title={collapse.title} content={collapse.content} />    //Ajout du composant Collapse avec les paramètres title et content du collapse
        ))}
      </div>
    </main>
  );
};

export default About;                                                                            