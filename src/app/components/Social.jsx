import "./Social.css"
import {motion} from "framer-motion"

const socials = [
    {name:"Github", link:"https://github.com/vipul0sahu"},
    {name:"Codepen", link:"https://codepen.io/vipul0sahu"},
    {name:"Linkdin", link:"https://www.linkedin.com/in/vipul-sahu-7323a3220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
]

const elements = socials.map((social, index) =>(
        <motion.li
        whileHover={{opacity: 0.5}} 
        className="social__item" 
        key={index}>
          <a
            className="social__link d-flex"
            href={social.link}>
              {social.name}: @vipul
              <img width="25" height="25" src="https://img.icons8.com/neon/96/forward-arrow.png" alt="forward-arrow"/>
          </a>
        </motion.li>
))

export default function Social() {
  return (
    <div id="social" className="social">
        <div className="container">
            <h3 className="social__heading f-prop">Follow me</h3>
            <ul className="social__list">
                {elements}
            </ul>
        </div>
    </div>
  )
}
