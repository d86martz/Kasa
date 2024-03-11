import "./banner.scss"

const Banner = (props) => {
  return (
    <div id={props.id} className="banner">
      <img
        src={props.image}
        alt="Bannière"
      />
      <h1 id="banner-title">{props.title}</h1>
    </div>
  );
};

export default Banner;
