import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import About from './pages/about/about'
import Location from './pages/location/location'
import Error from './pages/error/error'

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    ReactDOM.render(
      <React.StrictMode>
          <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/location/:id" element={<Location />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Router>
      </React.StrictMode>,
  document.getElementById('root')
  ) 
  );
}

export default App;
