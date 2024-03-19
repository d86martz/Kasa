import { useNavigate } from "react-router-dom";       //Import de la fonctionnalité de navigation de la librairie React

import "./card.scss"                                  

const Card = (props) => {                            
  const navigate = useNavigate();                      
  const id = props.id                                 
  const housingPage = (id) => {                       //Redirection vers la page du logement selon l'id 
      navigate(`/housing/${id}`, {state: id})        
  };
  return (                                            
    <li id="card" onClick={() => housingPage(id)}>    
      <img src={props.cover} alt={props.title} />
      <h2>{props.title}</h2>     
    </li>
  );
};

export default Card;                                 
