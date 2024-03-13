import FullStar from "../../assets/images/full_star.png";             //Import de l'image FullStar
import EmptyStar from "../../assets/images/empty_star.png";           //Import de l'image EmptyStar

import "./rating.scss"                                                //Import de la feuille de style

const Rating = (props) => {                                           //Création d'un composant Rating selon paramètres
  const stars = [1, 2, 3, 4, 5];                                      //Constante pour création d'un tableau avec 5 entrées
  return (                                                            //Ajout au DOM
    <div id="rating">
      <ul>
        {stars.map((star) => {                                        //Itération dans le tableau, pour chaque entrée:
          const rate = props.rating >= star ? FullStar : EmptyStar;   //Constante pour ajouter au tableau le nombre d'étoiles pleines ou vides en fonction du paramètre rating 
          return (                                                    //Ajout au DOM
            <li key={star}>
              <img src={rate} alt="star"></img>                       {/*Ajout de l'image et d'une description */}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Rating;                                                //Exportation du composant
