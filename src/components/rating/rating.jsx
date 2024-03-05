import React from 'react'

import FullStar from '../../assets/images/full_star.png'
import EmptyStar from '../../assets/images/empty_star.png'


const Rating = (props) => {
  const stars = [1,2,3,4,5]
  return (
    <div className={props.className}>
      {stars.map(star => {
        const rate = props.rating >= star ? FullStar : EmptyStar
        return <img className="star" key={star} src={rate} alt="star"></img>
      })}
    </div>
  )
}

export default Rating