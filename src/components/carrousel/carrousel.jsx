import React, {useState} from "react";

import ArrowLeft from "../../assets/images/arrow_back.png";
import ArrowRight from "../../assets/images/arrow_forward.png";

import './carrousel.scss'

const Carrousel = (props) => {
  const picturesLength = props.pictures.length
  const [index, setIndex] = useState(0);
  const prevPicture = () => {
      setIndex(index === 0 ? picturesLength - 1 : index - 1);
    };
    const nextPicture = () => {
      setIndex(index === picturesLength - 1 ? 0 : index + 1);
    };
  return (
    <div id="carrousel">
        <img 
          src={props.pictures[index]}
          alt="Logement"
        />
        <div id="carrousel-controls">
          {picturesLength > 1 && ( 
            <img 
              onClick={prevPicture}
              src={ArrowLeft}
              alt="Fleche gauche" 
            />
          )}
          {picturesLength > 1 && ( 
            <img 
              onClick={nextPicture}
              src={ArrowRight}
              alt="Fleche droite"
            />
          )}
        </div>
        {picturesLength > 1 && (
          <p>
            {index + 1}/{picturesLength}
          </p>
        )}
    </div>
  )
}

export default Carrousel;