import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";

import Banner_d from "../../assets/images/banner_1-1240w.webp";
import Banner_m from "../../assets/images/banner_1-335w.webp";

const Home = () => {
  return (
    <div className="home">
      <Banner
        className="banner"
        image_d={Banner_d}
        image_m={Banner_m}
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  );
};

export default Home;
