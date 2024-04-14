"use client";

import "./Nav.css"
import React, { useState } from 'react';
import {motion} from "framer-motion"

export default function Nav() {

  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="navbar">
        <div className="container">
            <nav className={`nav ${navVisible ? 'nav--visible' : ''}`}>
                <ul className="nav__list">
                    <motion.li whileHover={{opacity: 0.5}} whileTap={{scale: 0.9}} className="nav__item"><a href="#work" className="nav__link">Work</a></motion.li>
                    <motion.li whileHover={{opacity: 0.5}} whileTap={{scale: 0.9}} className="nav__item"><a href="#about" className="nav__link">About</a></motion.li>
                    <motion.li whileHover={{opacity: 0.5}} whileTap={{scale: 0.9}} className="nav__item"><a href="#social" className="nav__link">Socials</a></motion.li>
                    <motion.li whileHover={{opacity: 0.5}} whileTap={{scale: 0.9}} className="nav__item"><a href="https://github.com/vipul0sahu" className="nav__link"><img width="32" height="32" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-github-with-cat-logo-an-online-community-for-software-development-logo-tritone-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-tritone-tal-revivo"/></a></motion.li>
                    <motion.li whileHover={{opacity: 0.5}} whileTap={{scale: 0.9}} className="nav__item"><a href="https://www.linkedin.com/in/vipul-sahu-7323a3220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="nav__link"><img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-linkedin-in-logo-used-for-professional-networking-logo-tritone-tal-revivo.png" alt="external-linkedin-in-logo-used-for-professional-networking-logo-tritone-tal-revivo"/></a></motion.li>
                </ul>
            </nav>

            <button onClick={toggleNav} className="nav-toggle" aria-label="open navigation">
                <span className="hamburger"></span>
            </button>
        </div>
    </div>
  )
}
