import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";

import BannerImg from "../../assets/images/banner_1-1240w.webp";

const Home = () => {
  return (
    <main id="home">
      <Banner
        id="home-banner"
        image={BannerImg}
        title="Chez vous, partout et ailleurs"
      />
      <Gallery id="home-gallery"/>
    </main>
  );
};

export default Home;
