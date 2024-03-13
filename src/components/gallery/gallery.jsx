import Card from "../card/card";                          //Import du composant Card

import "./gallery.scss";                                  //Import de la feuille de style

import HousingData from "../../datas/housingData.json";   //Import de l'objet contenant les données des logements

const Gallery = () => {                                   //Création d'un composant Gallery
  return (
    <div id="gallery">
      <ul>                                              
        {HousingData.map((housing => {                    //Itération dans l'objet contenant les données des logements, pour chaque logement:
          return (                                        //Ajout au DOM
              <Card                                       //Ajout du composant Card
                key={housing.id}                          //paramètre key selon id du logement
                id={housing.id}                           //paramètre id selon id du logement
                cover={housing.cover}                     //paramètre cover selon le cover du logement
                title={housing.title}                     //paramètre title selon titre du logement
              />
          );
        }))}
      </ul>
    </div>
  );
};

export default Gallery;                                         //Exportation du composant
