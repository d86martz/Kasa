import Card from "../card/card";

import HousingData from "../../datas/housingData.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {HousingData.map((housing) => {
        return (
          <Card 
            key={housing.id}
            id={housing.id}
            cover={housing.cover}
            title={housing.title}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
