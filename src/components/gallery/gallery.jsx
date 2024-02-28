import React from "react";
import { Link } from "react-router-dom";
import LocationsData from "../datas/locations.json";
import Card from "./card";

const Gallery = () => {
  return (
    <div className="gallery">
      {LocationsData.map((location) => {
        return (
          <article className="location" key={location.id}>
            <Link to={{ pathname: "../pages/location" }}>
              <Card
                img
                src={location.cover}
                alt={location.title}
                title={location.title}
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;