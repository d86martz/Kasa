import React from "react";

import LocationsData from "../../datas/locations.json";

const Location = () => {
  const location = LocationsData.find((locationData => locationData.id === location))

    return (
      <div className="location">
        
      </div>
    );
  };
  
  export default Location;