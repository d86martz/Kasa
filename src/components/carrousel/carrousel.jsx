import React, {useState} from "react";                            //Import de la fonctionnalité d'ajout de variable d'état de la librairie React

import ArrowLeft from "../../assets/images/arrow_back.png";       //Import de l'image ArrowLeft
import ArrowRight from "../../assets/images/arrow_forward.png";   //Import de l'image ArrowRight

import './carrousel.scss'                                         //Import de la feuille de style

const Carrousel = (props) => {                                    //Création d'un composant Carrousel selon paramètres
  const picturesLength = props.pictures.length                    //Constante qui défini le nombre d'image passé en paramètres
  const [index, setIndex] = useState(0)                           //Constante pour metre à jour l'état de l'index
  const prevPicture = () => {                                     //Fonction qui permet d'afficher l'image précédente
      setIndex(index === 0 ? picturesLength - 1 : index - 1);     //Séléction de l'image précédente sous condition: 
  };                                                              //Si c'est la première image de la liste (index === 0), on sélectionne la dernière image de la liste (picturesLength - 1) sinon on revient en arrière selon la position dans la liste d'après l'index actuel (index - 1)
  const nextPicture = () => {                                     //Fonction qui permet d'afficher l'image suivante
    setIndex(index === picturesLength - 1 ? 0 : index + 1);       //Séléction de l'image suivante sous condition: 
  };                                                              //Si c'est la dernière image de la liste (picturesLength - 1), on sélectionne la première image la liste (picturesLength 0) sinon on avance selon la position dans la liste d'après l'index actuel (index + 1)
  return (                                                        //Ajout au DOM    
    <div id="carrousel">                                          
        <img src={props.pictures[index]} alt="Logement"/>         {/* Ajout d'une image selon l'index dans la liste d'images passées en paramètres et d'une description */}
        <div id="carrousel-controls">                             
  
          {picturesLength > 1 && (                                //Si liste d'images est superieures a 1   
            <img                                                  //                               
              src={ArrowLeft}                                     //Ajout de l'image ArrowLeft
              alt="Fleche gauche"                                 //Ajout d'une descripition de l'image
              onClick={prevPicture}                               //Lancement de la fonction prevPicture au clique
            />
          )}
          {picturesLength > 1 && (                                //Si liste d'images est superieures a 1
            <img                                                  //
              src={ArrowRight}                                    //Ajout de l'image ArrowRight 
              alt="Fleche droite"                                 //Ajout d'une descripition de l'image
              onClick={nextPicture}                               //Lancement de la fonction nextPicture au clique  
            />
          )}
        </div>                                                    
        {picturesLength > 1 && (                                  //Si liste d'images est superieures a 1
          <p>                                                     
            {index + 1}/{picturesLength}                          {/* Index actuel sur la longueur de la liste */}
          </p>
        )}
    </div>
  )
}

export default Carrousel;                                         //Exportation du composant