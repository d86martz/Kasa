import {useLocation, Navigate} from "react-router-dom";                     //Import de la fonctionnalité de localisation et de navigation de react

import "./housing.scss"                                                     //Import de la feuille de style

import Carrousel from "../../components/carrousel/carrousel";               //Import du composant Carrousel
import Tags from "../../components/tags/tags";                              //Import du composant Tags
import Rating from "../../components/rating/rating";                        //Import du composant Rating
import Collapse from "../../components/collapse/collapse";                  //Import du composant Collapse

import HousingData from "../../datas/housingData.json";                     //Import de l'objet contenant les données des logements

const Housing = () => {
  const location = useLocation();                                           //Constante pour passer un objet comme 2 ème argument dans location
  const housing = HousingData.find((data => data.id === location.state));   //Constante pour verifier si l'id du logement contenu dans la valeur d'etat correspond à un id dans l'objet
  if (location.state == null) {                                             //Si la valeur d'état ne correspond pas
    return <Navigate replace to="*" />                                      //Redirectin vers la page d'erreur
  } else {                                                                  //Sinon
    const equipments = (                                                    //constante pour créer la liste des equipements du logement
      <ul className="equipments-list">  
        {housing.equipments.map((equipment, index) => (                     //Itération dans la liste des equipements du logements, pour chaque equipement:                 
          <li key={index} className="equipment">{equipment}</li>            //listage de l'equipement
        ))}
      </ul>
    );
    return (                                                                //Ajout au DOM
      <main id="housing">
      <Carrousel pictures={housing.pictures} />                             {/* Ajout du composant Carrousel avec en paramètre les photos du logement */}
        <div id="housing-description">
          <div id="housing-situation">
            <h1>{housing.title}</h1>                                        {/* Ajout du titre du logement */}
            <span>{housing.location}</span>                                 {/* Ajout de l'adresse du logement */}
            <Tags tagsData={housing.tags} />                                {/* Ajout du composant Tags avec en paramètre les étiquettes du logement */}
          </div>
          <div id="housing-host">
            <div id="housing-hostDescription">
              <p>{housing.host.name}</p>                                    {/* Ajout du nom du proriétaire du logement */}
              <img
                id="housing-hostAvatar"                                     
                src={housing.host.picture}                                  // Ajout de la photo du proriétaire du logement
                alt={housing.host.name} />                                  {/* Ajout du nom du proriétaire du logement */}
            </div>
            <Rating rating={housing.rating} />                              {/* Ajout du composant Rating avec en paramètre la notes du logement */}
          </div>
        </div>
        <div id="housing-collapses">
        <Collapse title="Description" content={housing.description}/>       {/* Ajout du composant Collapse avec en paramètre la description du logement */}
        <Collapse title="Equipements" content={equipments}/>                {/* Ajout du composant Collapse avec en paramètre la liste des équipements du logement */}
        </div>
      </main>
    );
  };
};

export default Housing;