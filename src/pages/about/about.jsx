import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";

import Banner_d from "../../assets/images/banner_2-1440w.webp";
import Banner_m from "../../assets/images/banner_2-335w.webp";
import CollapsesData from "../../datas/collapsesData.json";

const About = () => {
  return (
    <main>
      <Banner
        className="banner-about"
        image_d={Banner_d}
        image_m={Banner_m}
        title=""
      />
      <div className="Collapses">
        {CollapsesData.map((collapse) => {
          return <Collapse title={collapse.title} data={collapse.content} />;
        })}
      </div>
    </main>
  );
};

export default About;
