import {Route, Routes} from "react-router-dom"                  //Import de la fonctionnalitée de routage de la librairie React

import "./App.scss"                                             //Import de la feuille de style

import Home from "./pages/home/home";                           //
import About from "./pages/about/about";                        //Import des différentes pages du site
import Housing from "./pages/housing/housing";                  //
import ErrorPage from "./pages/error/error";                    //

import Header from "./components/header/header";                //Import du composant Header
import Footer from "./components/footer/footer";                //Import du composant Footer

const App = () => {                                             //Création d'un composant App
  return (                                                      //Ajout au DOM
    <div id="root-body" >                                       
        <Header />                                              {/* Ajout du composant Header */}
        <Routes>                                                
          <Route path="/" element={<Home />} />                 {/*                                              */}
          <Route path="/about" element={<About />} />           {/* Liens vers les les différentes pages du site */}
          <Route path="/housing/:id" element={<Housing />} />   {/* Ce lien nécessite un id                      */}
          <Route path="*" element={<ErrorPage />} />            {/*                                              */}
        </Routes>                                               
        <Footer />                                              {/* Ajout du composant Footer */}
    </div>
  )
};

export default App;                                             //Exportation du composant