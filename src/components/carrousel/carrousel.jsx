import React, {useState} from "react";

import ArrowLeft from "../../assets/images/arrow_back.png";
import ArrowRight from "../../assets/images/arrow_forward.png";

import './carrousel.scss'

const Carrousel = ({pictures}) => {
    const length = pictures.length
    const [index, setIndex] = useState(0);
    const prevPicture = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
      };
      const nextPicture = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
      };
    return (
      <div className="carrousel">
        <img 
          className="carrousel-picture"
          src={pictures[index]}
          alt="Logement"
        />
        <div className="carrousel-controls">
          {length > 1 && ( 
            <img 
              onClick={prevPicture}
              className="carrousel-arrowLeft"
              src={ArrowLeft}
              alt="Fleche gauche" 
            />
          )}
          {length > 1 && ( 
            <img 
              onClick={nextPicture}
              className="carrousel-arrowRight"
              src={ArrowRight}
              alt="Fleche droite"
            />
          )}
        </div>
        <p className="carrousel-index">
          {index + 1}/{length}
        </p>
      </div>
    )
}

export default Carrousel;
