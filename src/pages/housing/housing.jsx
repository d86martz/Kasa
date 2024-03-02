import HousingData from "../../datas/housingData.json";
import { useState } from 'react'

const Housing = () => {
  const target = useState()
  console.log(target)
  const housing = HousingData.find(data => data.id === target)
  return (
    <div className="housing">
      <h1>{housing.title}</h1>
    </div>
  );
};
  
  export default Housing