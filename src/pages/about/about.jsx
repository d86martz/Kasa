import Banner from "../../components/banner/banner";

import CollapsesList from "../../components/collapsesList/collapsesList";

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
      <CollapsesList title="about" data={CollapsesData} itemsListLabel="items" itemTitle="title" itemContent="content"/>;
    </main>
  );
};

export default About;