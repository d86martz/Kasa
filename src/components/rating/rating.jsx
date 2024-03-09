import FullStar from "../../assets/images/full_star.png";
import EmptyStar from "../../assets/images/empty_star.png";

import "./rating.scss"

const Rating = (props) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div id={props.id}>
      <ul className="ratingList">
        {stars.map((star) => {
          const rate = props.rating >= star ? FullStar : EmptyStar;
          return (
            <li key="star" className="ratingList-item">
              <img src={rate} alt="star"></img>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Rating;
