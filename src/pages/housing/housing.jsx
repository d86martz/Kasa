import {useLocation} from "react-router-dom";

import "./housing.scss"

import Carrousel from "../../components/carrousel/carrousel";
import Tags from "../../components/tags/tags";
import Rating from "../../components/rating/rating";
// import Collapses from "../../components/collapses/collapses";

import HousingData from "../../datas/housingData.json";

const Housing = () => {
  const location = useLocation();
  const housing = HousingData.find((data) => data.id === location.state);
  // const equipments = (
  //   <ul id="equipments-list">
  //     {housing.equipments.map((equipment) => (
  //       <li key={equipment} className="equipment">{equipment}</li>
  //     ))}
  //   </ul>
  // );
  return (
    <main id="housing">
    <Carrousel id="housing-carrousel" pictures={housing.pictures} />
      <div id="housing-description">
        <div id="housing-situation">
          <h1 id="housing-title">{housing.title}</h1>
          <span id="housing-location">{housing.location}</span>
          <Tags id="housing-tags" tagsData={housing.tags} />
        </div>
        <div id="housing-host">
          <div id="housing-hostDescription">
            <p id="housing-hostName">{housing.host.name}</p>
            <img
              id="housing-hostAvatar"
              src={housing.host.picture}
              alt={housing.host.name} />
          </div>
          <Rating id="host-rating" rating={housing.rating} />
        </div>
      </div>
      <div id="housing-collapses">
        {/* <Collapses title="housing" /> */}
      </div>
    </main>
  );
};

export default Housing;
