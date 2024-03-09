import "./banner.scss"

const Banner = (props) => {
  return (
    <div id={props.id} className="banner">
      <img
        src={props.image_d}
        srcSet={`${props.image_m} 335w, ${props.image_d} 1240w`}
        sizes="(max-width:600px) 335px, 1240px"
        alt="Bannière"
      />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Banner;
