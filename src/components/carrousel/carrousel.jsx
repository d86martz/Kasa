import React, {useState} from "react";                            //Import de la fonctionnalité d'ajout de variable d'état de la librairie React

import ArrowLeft from "../../assets/images/arrow_back.png";       
import ArrowRight from "../../assets/images/arrow_forward.png";   

import './carrousel.scss'                                         

const Carrousel = (props) => {                                    //Création d'un composant CArrousel selon paramètres
  const picturesLength = props.pictures.length                    
  const [index, setIndex] = useState(0)                           //Constante pour metre à jour l'état de l'index
  const prevPicture = () => {                                     
      setIndex(index === 0 ? picturesLength - 1 : index - 1);     
  };                                                              //Navigation dans le carrousel
  const nextPicture = () => {                                     
    setIndex(index === picturesLength - 1 ? 0 : index + 1);       
  };                                                              
  return (                                                            
    <div id="carrousel">                                          
        <img src={props.pictures[index]} alt="Logement"/>         {/* Image selon son index*/}
        <div id="carrousel-controls">                             
  
          {picturesLength > 1 && (                                
            <img                                                                            
              src={ArrowLeft}                                     
              alt="Fleche gauche"                                 
              onClick={prevPicture}                               
            />
          )}
          {picturesLength > 1 && (                                
            <img                                                  
              src={ArrowRight}                                    
              alt="Fleche droite"                                 
              onClick={nextPicture}                               
            />
          )}
        </div>                                                    
        {picturesLength > 1 && (                                 
          <p>                                                     
            {index + 1}/{picturesLength}                          {/* Index */}
          </p>
        )}
    </div>
  )
}

export default Carrousel;                                         //Exportation du composant