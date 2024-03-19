import { useState } from "react";                                         //Import de la fonctionnalité d'ajout de variable d'état de la librairie React

import ArrowUp from "../../assets/images/arrow_up.png";                  
import "./collapse.scss"                                                

const Collapse = (props) => {                                             
  const [open, setOpen] = useState(false);                                //Constante pour metre à jour l'état du collapse
  const expended = () => {                                                
    setOpen((position) => !position);                                     //Constante qui défini la position de la flèche en fonction de l'état du collapse
  };                                                                      
  return (                                                                
    <div id="collapse" onClick={expended}>
      <div className="collapse-header">
        <h2>{props.title}</h2>                                            
        <img                                                              
          src={ArrowUp}                                                  
          className={`collapse-arrow ${open ? "reverse" : ""}`}           //Class en fonction de la position
          alt="flèche"                                                    
        />
      </div>
      {open && <div className="collapse-content">{props.content}</div>}   {/* Affichage du contenu à l'ouverture */}
    </div>
  )
};
export default Collapse;                                                  