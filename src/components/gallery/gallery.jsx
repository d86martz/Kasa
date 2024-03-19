import Card from "../card/card";                          

import "./gallery.scss";                                  

import HousingData from "../../datas/housingData.json";   

const Gallery = () => {                                   //Création d'un composant Gallery selon paramètres
  return (
    <div id="gallery">
      <ul>                                              
        {HousingData.map((housing => {                    //Itération dans l'objet contenant les données des logements, pour chaque logement:
          return (                                        
              <Card                                    
                key={housing.id}                          
                id={housing.id}                           
                cover={housing.cover}                     
                title={housing.title}                     
              />
          );
        }))}
      </ul>
    </div>
  );
};

export default Gallery;                                         
