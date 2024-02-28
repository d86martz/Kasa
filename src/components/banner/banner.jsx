import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="./assets/images/image_title-1240w"
        srcset="./assets/images/image_title-335w, ./assets/images/image_title-1240w"
        sizes="(max-width:600px) 335px, 1240px"
        alt="Bannière"
        classname="header-logo"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner