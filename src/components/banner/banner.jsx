const Banner = (props) => {
  return (
    <div className={props.className}>
      <img 
        src={props.image_d}
        srcset={`${props.image_m} 335w, ${props.image_d} 1240w`}
        sizes='(max-width:600px) 335px, 1240px'
        alt="Bannière"
      />
      <h1>{props.title}</h1>
    </div>
  )
}

export default Banner