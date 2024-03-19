import {createRoot} from "react-dom/client";                //Import de la fonctionnalité de création de racine de la librairie react
import {BrowserRouter} from "react-router-dom";             //Import de la fonctionnalité de routage de la librairie react

import App from "./App";                                    
const root = createRoot(document.getElementById("root"));   
root.render(
  <BrowserRouter>                                           
    <App />                                                 
  </BrowserRouter>
);