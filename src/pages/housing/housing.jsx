import { useLocation } from "react-router-dom";
import HousingData from "../../datas/housingData.json";

const Housing = () => {
  const location = useLocation()
  const housing = HousingData.find(data => data.id === location.state.id)
  return (
    <div className="housing">
      <h1>{housing.title}</h1>
    </div>
  );
};
  
export default Housing