import React from 'react';

import FullStar from '../../assets/images/full_star.png';
import EmptyStar from '../../assets/images/empty_star.png';


const Rating = ({className, rating }) => {
  const STARS = new Array(5);
  return (
    <div className={className}>
      {STARS.map(star => {
        const ratePicture = star < rating ? FullStar : EmptyStar;
        return <img key={star} src={ratePicture} alt="Rate"></img>;
      })}
    </div>
  );
};

export default Rating;