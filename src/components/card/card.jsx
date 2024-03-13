import { useNavigate } from "react-router-dom";       //Import de la fonctionnalité de navigation de la librairie React

import "./card.scss"                                  //Import de la feuille de style

const Card = (props) => {                             //Composant Card selon paramètres
  const navigate = useNavigate();                     //Constante pour passer un objet comme 2 ème argument dans navigate
  const id = props.id                                 //Constante id pour permettre le passage du paramètre dans la fonction
  const housingPage = (id) => {                       //Fonction de redirection vers la page du logement selon l'id 
      navigate(`/housing/${id}`, {state: id})         //Navigation vers la page du logement avec transmission de l'id comme valeur d'etat
  };
  return (                                            //Ajout au DOM
    <li id="card" onClick={() => housingPage(id)}>    {/* Création d'un élément de liste avec attribution d'un id qui, au clique, renvoi à la page du logement selon son id */}
      <img src={props.cover} alt={props.title} />     {/* Ajout d'une image et d'une description selon les paramètres cover et title */}
      <h2>{props.title}</h2>                          {/* Ajout d'un titre selon le paramètre title*/}
    </li>
  );
};

export default Card;                                 
