import React from "react";
import Banner_d from "../../assets/images/banner_1-1240w.webp"
import Banner_m from "../../assets/images/banner_1-335w.webp"

const Banner = () => {
  return (
    <div className="banner-home">
      <img
        src={Banner_d}
        srcset={`${Banner_m} 335w, ${Banner_d} 1240w`}
        sizes="(max-width:600px) 335px, 1240px"
        alt="Bannière"
        classname="banner-Img"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner