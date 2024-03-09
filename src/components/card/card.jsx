import { useNavigate } from "react-router-dom";

import "./card.scss"

const Card = (props) => {
  const navigate = useNavigate();
  const id = props.id
  const housingPage = (id) => {
      navigate(`/housing/${id}`, {state: id})
  };
  return (
    <li className="card" onClick={() => housingPage(id)}>
      <img src={props.cover} alt={props.title} />
      <h2>{props.title}</h2>
    </li>
  );
};

export default Card;
