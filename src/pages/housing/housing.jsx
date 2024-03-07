import {useLocation} from "react-router-dom";

import "./housing.scss"

import Carrousel from "../../components/carrousel/carrousel";
import Tags from "../../components/tags/tags";
import Rating from "../../components/rating/rating";
import Collapse from "../../components/collapse/collapse";

import HousingData from "../../datas/housingData.json";

const Housing = () => {
  const location = useLocation();
  const housing = HousingData.find((data) => data.id === location.state);
  const pictures = housing.pictures;
  const equipments = (
    <ul className="equipments-list">
      {housing.equipments.map((equipment) => (
        <li className="equipment">{equipment}</li>
      ))}
    </ul>
  );
  return (
    <main>
    <Carrousel pictures={pictures} />
      <div className="housing-description">
        <h1 className="housing-title">{housing.title}</h1>
        <span className="housing-location">{housing.location}</span>
        <Tags className="housing-tags" tagsData={housing.tags} />
      </div>
      <div className="housing-host">
        <p className="housing-hostName">{housing.host.name}</p>
        <img
          className="housing-hostAvatar"
          src={housing.host.picture}
          alt={housing.host.name}
        />
        <Rating className="host-rating" rating={housing.rating} />
      </div>
      <Collapse title="Description" data={housing.description} />
      <Collapse title="Equipements" data={equipments} />
    </main>
  );
};

export default Housing;
