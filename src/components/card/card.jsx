import { useNavigate } from "react-router-dom";

import "./card.scss"

const Card = ({id, cover, title}) => {
  const navigate = useNavigate();
  const housingPage = (id) => {
      navigate(`/housing/${id}`, {state: id})
  };
  return (
    <article className="card" onClick={() => housingPage(id)}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  );
};

export default Card;
