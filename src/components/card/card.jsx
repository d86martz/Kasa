import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({id, cover, title}) => {
  return (
    <article className="gallery_card">
      <NavLink 
        to={`/pages/location/${id}`}>
        <img src={cover} alt={title} />
        <h3>{title}</h3> 
      </NavLink>
    </article>
  );
}

export default Card;
