import "./tags.scss"                    //Import de la feuille de style

const Tags = (props) => {               //Création d'un composant Rating selon paramètres
  return (                              //Ajout au DOM
    <div>
      <ul id="tagsList">
        {props.tagsData.map((tag) => (  //Itération dans la liste selon le paramètre tagsData, pour chaque tag:
          <li key={tag}>{tag}</li>      //Ajout du tag
        ))}
      </ul>
    </div>
  );
};

export default Tags;                    //Exportation du composant
