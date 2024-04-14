"use client";
import "./Work.css"
import { motion } from "framer-motion"

const projects = [
    {image: "/images/business-card.png", link:"", alt: ""},
    {image: "/images/multiple-choice.png", link:"", alt: ""},
    {image: "/images/travel-journal.png", link:"", alt: ""},
]

const elements = projects.map((project, index)=>(
    
    <motion.div
    style={{ overflow: 'hidden' }}
    whileHover={{ filter: 'grayscale(0%)', scale: 1.05, overflow: 'hidden' }}
    className="work__project" 
    key={index}>
        <div className="image-wrapper"> {/* Wrap the img tag with a div */}
            <img className="work__image" src={project.image} alt={project.alt}/>
        </div>
        <a href={project.link}>
            <motion.img
            whileHover={{opacity: .75}} 
            whileTap={{scale: .9}}
            className="work__arrow" 
            src="https://img.icons8.com/plasticine/30/forward-arrow.png" alt="forward-arrow"/>
        </a> 
    </motion.div>
))

export default function Work() {
  return (
    <div id="work" className="work">
        <div className="container">
            <h3 className="work__heading f-prop">I’ve worked on</h3>
            <div className="work__group d-flex">
                {elements}
            </div>
        </div>
    </div>
  )
}
