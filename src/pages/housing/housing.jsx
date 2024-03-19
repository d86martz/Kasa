import {useLocation, Navigate} from "react-router-dom";                     //Import de la fonctionnalité de localisation et de navigation de react

import "./housing.scss"                                                     

import Carrousel from "../../components/carrousel/carrousel";               
import Tags from "../../components/tags/tags";                              
import Rating from "../../components/rating/rating";                        
import Collapse from "../../components/collapse/collapse";                  

import HousingData from "../../datas/housingData.json";                     

const Housing = () => {
  const location = useLocation();                                           
  const housing = HousingData.find((data => data.id === location.state));   //Constante pour verifier si l'id du logement contenu dans la valeur d'etat correspond à un id dans l'objet
  if (location.state == null) {                                             
    return <Navigate replace to="*" />                                      
  } else {                                                                  
    const equipments = (                                                    
      <ul className="equipments-list">  
        {housing.equipments.map((equipment, index) => (                     //Itération dans la liste des equipements du logements               
          <li key={index} className="equipment">{equipment}</li>            //listage de l'equipement
        ))}
      </ul>
    );
    return (                                                                
      <main id="housing">
      <Carrousel pictures={housing.pictures} />                             {/* Ajout du composant Carrousel avec en paramètre les photos du logement */}
        <div id="housing-description">
          <div id="housing-situation">
            <h1>{housing.title}</h1>                                        
            <span>{housing.location}</span>                                 
            <Tags tagsData={housing.tags} />                                {/* Ajout du composant Tags avec en paramètre les étiquettes du logement */}
          </div>
          <div id="housing-host">
            <div id="housing-hostDescription">
              <p>{housing.host.name}</p>                                    
              <img
                id="housing-hostAvatar"                                     
                src={housing.host.picture}                                  
                alt={housing.host.name} />                                  
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