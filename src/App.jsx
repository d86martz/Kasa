import {Route, Routes} from "react-router-dom"

import "./App.scss"

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Housing from "./pages/housing/housing";
import ErrorPage from "./pages/error/error";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div id="root-body" >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>
  )
};

export default App;