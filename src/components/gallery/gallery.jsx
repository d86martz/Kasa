import Card from "../card/card";

import "./gallery.scss";

import HousingData from "../../datas/housingData.json";

const Gallery = (props) => {
  return (
    <div id="gallery">
      <ul>
        {HousingData.map((housing => {
          return (
              <Card 
                key={housing.id}
                id={housing.id}
                cover={housing.cover}
                title={housing.title}
              />
          );
        }))}
      </ul>
    </div>
  );
};

export default Gallery;
