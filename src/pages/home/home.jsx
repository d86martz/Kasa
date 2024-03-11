import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";

import BannerImg from "../../assets/images/banner_1-1240w.webp";

import "./home.scss"

const Home = () => {
  const title = `Chez vous, \n partout et ailleurs`;
  return (
    <main id="home">
      <Banner
        id="home-banner"
        image={BannerImg}
        title={title}
      />
      <Gallery id="home-gallery"/>
    </main>
  );
};

export default Home;
