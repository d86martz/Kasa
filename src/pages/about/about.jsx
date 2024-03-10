import Banner from "../../components/banner/banner";

import Collapses from "../../components/collapses/collapses";

import Banner_d from "../../assets/images/banner_2-1440w.webp";
import Banner_m from "../../assets/images/banner_2-335w.webp";
import CollapsesData from "../../datas/collapsesData.json";

const About = () => {
  const collapsesTitle="about"
  const collapsesList = CollapsesData.filter((list => list.title === collapsesTitle))
  return (
    <main id="about">
      <Banner
        className="banner"
        image_d={Banner_d}
        image_m={Banner_m}
      />
      <Collapses data={collapsesList} title={collapsesTitle} titleLabel="collapseTitle" contentLabel="collapseContent"/>
    </main>
  );
};

export default About;