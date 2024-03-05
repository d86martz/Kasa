import { useNavigate } from 'react-router-dom'

const Card = ({id, cover, title}) => {
  const navigate = useNavigate()
  const housingPage = (id) => {
    navigate(`/housing/${id}`,
       {state:id}
    )
  }
  return (
    <article className="card" onClick={() => housingPage({id})}> 
        <img src={cover} alt={title} />
        <h3>{title}</h3> 
    </article>
  );
}

export default Card
