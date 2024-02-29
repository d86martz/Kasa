import React from "react";
import LocationsData from "../../datas/locations.json";
import Card from "../card/card";

const Gallery = () => {
  return (
    <div className="gallery">
      {LocationsData.map((location) => {
        return (
          <Card
            key={location.id}
            cover={location.cover}
            alt={location.title}
            title={location.title}
          />
        );
      })}
    </div>
  );
};

export default Gallery;