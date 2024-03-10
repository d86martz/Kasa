import Banner from "../../components/banner/banner";

import Collapse from "../../components/collapse/collapse";

import BannerImg from "../../assets/images/banner_2-1440w.webp";
import AboutCollapses from "../../datas/aboutCollapses.json";

import "./about.scss"

const About = () => {

  return (
    <main id="about">
      <Banner
        className="banner"
        image={BannerImg}
      />
      <div id="aboutCollapses">
        {AboutCollapses.map((collapse => 
          <Collapse key={collapse.title} title={collapse.title} content={collapse.content} />
        ))}
      </div>
    </main>
  );
};

export default About;