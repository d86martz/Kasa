import {createRoot} from "react-dom/client";                //Import de la fonctionnalité de création de racine de la librairie react
import {BrowserRouter} from "react-router-dom";             //Import de la fonctionnalité de routage de la librairie react

import App from "./App";                                    //Import de la feuille de style      

const root = createRoot(document.getElementById("root"));   //Constante pour création de la racine pour afficher les composants react
root.render(
  <BrowserRouter>                                           {/* Stockage de l'emplaçement dans la barre d'adresse du navigateur */}
    <App />                                                 {/* Ajout du composant App */}
  </BrowserRouter>
);