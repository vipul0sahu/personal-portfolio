"use client"

import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Skill from "./components/Skill";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div 
    className="main"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 2 }}>
      <Nav />
      <Intro />
      <Work />
      <About />
      <Skill />
      <Social />
      <Footer />
    </motion.div>
  );
}
