"use client"
import "./Footer.css"
import {motion} from "framer-motion"

export default function Footer() {

  
  return (
    <div className="footer">
        <div className="container">
            <ul className="footer__items d-flex">
              <motion.li whileTap={{scale: 0.9}} className="footer__list accent-color"><motion.a whileHover={{color: '#FFFFFF'}} className="footer__link" href="#home">Home</motion.a></motion.li>
              <motion.li whileTap={{scale: 0.9}} className="footer__list accent-color"><motion.a whileHover={{color: '#FFFFFF'}} className="footer__link" href="#about">About</motion.a></motion.li>
              <motion.li whileTap={{scale: 0.9}} className="footer__list accent-color"><motion.a whileHover={{color: '#FFFFFF'}} className="footer__link" href="#work">Work</motion.a></motion.li>
            </ul>
            <p className="footer__copyright">Copyright © 2024 Veloshyft63. All Rights Reserved.</p>
        </div>
    </div>
  )
}
