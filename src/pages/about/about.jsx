import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";

import Banner_d from "../../assets/images/banner_2-1440w.webp";
import Banner_m from "../../assets/images/banner_2-335w.webp";
import CollapsesData from "../../datas/collapsesData.json";

const About = () => {
  return (
    <main id="about">
      <Banner
        className="banner"
        image_d={Banner_d}
        image_m={Banner_m}
      />
        {CollapsesData.map((collapse) => {
          return <Collapse title={collapse.title} data={collapse.content} />;
        })}
    </main>
  );
};

export default About;
