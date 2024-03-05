import React from 'react'

import Footer_d from "../../assets/images/footer-1440w.webp"
import Footer_m from "../../assets/images/footer-375w.webp"

const Footer = () => {
    return (
      <footer>
        <img
          src={Footer_d}
          srcset={`${Footer_m} 375w, ${Footer_d} 1440w`}
          sizes='(max-width:600px) 375px, 1440px'
          alt="Logo de la société"
          className="footer-logo"
        />
      </footer>
    )
  }
  
  export default Footer
  