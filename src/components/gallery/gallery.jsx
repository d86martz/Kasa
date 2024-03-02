import React from "react";
import HousingData from "../../datas/housingData.json";
import Card from "../card/card";

const Gallery = () => {
  return (
    <div className="gallery">
      {HousingData.map((housing) => {
        return (
          <Card
            id={housing.id}
            cover={housing.cover}
            alt={housing.title}
            title={housing.title}
          />
        );
      })}
    </div>
  );
};

export default Gallery;