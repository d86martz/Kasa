import "./banner.scss"            //import de la feuille de style

const Banner = (props) => {       //Création d'un composant Bannière selon paramètres
  return (                        //Ajout au DOM
    <div id="banner">             
      <img
        src={props.image}         //Ajout d'une image selon le paramètre image 
        alt="Bannière"            //Ajout d'une description à l'image
      />
      <h1>{props.title}</h1>      {/* Ajout d'un titre selon le paramètre title */}
    </div>
  );
};

export default Banner;            
