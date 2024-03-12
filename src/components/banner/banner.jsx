import "./banner.scss"

const Banner = (props) => {
  return (
    <div id="banner">
      <img
        src={props.image}
        alt="Bannière"
      />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Banner;
