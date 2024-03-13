import { useState } from "react";                                         //Import de la fonctionnalité d'ajout de variable d'état de la librairie React

import ArrowUp from "../../assets/images/arrow_up.png";                   //Import de l'image ArrowUp

import "./collapse.scss"                                                  //Import de la feuille de style

const Collapse = (props) => {                                             //Création d'un composant Collapse selon paramètres
  const [open, setOpen] = useState(false);                                //Constante pour metre à jour l'état du collapse
  const expended = () => {                                                //
    setOpen((position) => !position);                                     //Constante qui défini la position de la flèche en fonction de l'état du collapse
  };                                                                      //
  return (                                                                //Ajout au DOM
    <div id="collapse" onClick={expended}>
      <div className="collapse-header">
        <h2>{props.title}</h2>                                            {/* Ajout d'un titre selon le paramètre title */}
        <img                                                              //
          src={ArrowUp}                                                   //Ajout de l'image ArrowUp
          className={`collapse-arrow ${open ? "reverse" : ""}`}           //Ajout d'une classe à l'image et d'une autre si le collapse est ouvert
          alt="flèche"                                                    //Ajout d'une descripition de l'image
        />
      </div>
      {open && <div className="collapse-content">{props.content}</div>}   {/* Si le collapse est ouvert on ajoute le contenu selon le paramètre content */}
    </div>
  )
};
export default Collapse;                                                  //Exportation du composant