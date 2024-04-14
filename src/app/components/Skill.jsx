"use client"
import "./Skill.css"
import {motion} from "framer-motion"

export default function Skill() {
    const boxShadowVariants = {
        initial: {
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', // Start with no shadow
        },
        hover: {
          boxShadow: '0px 4px 8px #E85BFF', // Add shadow on hover
          scale: '1.05',
        },
      };
    
    const skills= [
        {name:"Typescript", link: "https://www.typescriptlang.org/"},
        {name:"SASS", link: "https://sass-lang.com/"},
        {name:"HTML", link: "https://html.com/"},
        {name:"Framer Motion", link: "https://www.framer.com/motion/"},
        {name:"Next.js", link: "https://nextjs.org/"},
        {name:"Git", link: "https://git-scm.com/"},
        {name:"Github", link: "https://github.com/"},
    ]

    const elements = skills.map((skill, index) => (
        <motion.div
        variants={boxShadowVariants} 
        initial="initial"
        whileHover="hover"
        className="skill__item" 
        key={index}>
            <a className="skill__link" href= {skill.link}>{skill.name}</a>
        </motion.div>
    ))

  return (
    <div className="skill">
        <div className="container">
            <h3 className="skill__heading f-prop">Tech stack I use</h3>
            <div className='skill__card d-flex'>
                {elements}
            </div>
        </div>
    </div>
  )
}
