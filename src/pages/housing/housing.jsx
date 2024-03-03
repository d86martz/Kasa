import { useLocation } from "react-router-dom"
import React, { useState } from "react"

import Tags from "../../components/tags/tags"
import Rating from "../../components/rating/rating"
import Collapse from "../../components/collapse/collapse"

import HousingData from "../../datas/housingData.json"

import ArrowLeft from "../../assets/images/arrow_back.png"
import ArrowRight from "../../assets/images/arrow_forward.png"



const Housing = () => {
  const location = useLocation()
  const housing = HousingData.find(data => data.id === location.state.id)
  const [index, setIndex] = useState(0)
  const pictures = housing.pictures.length
  const prevPicture = () => {
    setIndex(index === 0 ? pictures - 1 : index -1)
  }
  const nextPicture = () => {
    setIndex(index === pictures - 1 ? 0 : index + 1 )
  }

  return (
    <div className="housing-info">
      <div className='carrousel'>
        <img className='carrousel-picture' src={housing.pictures[index]} alt="Logement" />
        <img onClick={prevPicture} className='carrousel-ArrowLeft' src={ArrowLeft} alt="Flèche gauche" />
        <img onClick={nextPicture} className='carousel-ArrowRight' src={ArrowRight} alt="Flèche droite" />
        <p className='carrousel-index'>{index + 1}/{pictures}</p>
      </div>
      <div className='housing-description'>
        <h1 className='housing-title'>{housing.title}</h1>
        <span className='housing-location'>{housing.location}</span>
        <Tags className="housing-tags" tagsData={housing.tags} />
      </div>
      <div className='housing-host'>
        <div>
          <p className='housing-hostName'>{housing.host.name}</p>
          <img className='housing-hostAvatar' src={housing.host.picture} alt={housing.host.name} />
        </div>
        <div>
          <Rating rating={housing.rating} />
        </div>
      </div>
      <Collapse title="Description">
          {housing.description}
      </Collapse>
      <Collapse title="Équipements">
          <ul>
            {
              housing.equipments.map((equipment => <li>{equipment}</li>))
            }
          </ul>
      </Collapse>
    </div>
  )
}
  
export default Housing