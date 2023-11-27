import avatar from './assets/profile-pic (6).png'
import 'animate.css';



const About = ({contact,setContact,isNight}) => {
  return (
    <div className="about" id='about'>
       
        <div className="text">

        <h1 
        className={`${isNight && 'night-mode-text-heading'}`}>
        Hi! <br /> I&apos;am <span>Soufiane</span> 
        </h1>

        <p 
        className={`${isNight && 'night-mode-text' }`} >
          a <b 
          className={`${isNight && "night-mode-text"}`}>
          Front-End Developer </b>with skills in ReactJs, vanilla JS, and CSS.
        </p>

        <div className="buttons">
            <a 
            onClick={()=>setContact(true)}
            className='purple-btn' href="#contact">let&apos;s Talk <i className="bi bi-send"></i>
            </a>

            <a  className={`${isNight && 'night-mode-text-buttons'}`}
            href="#portfolio">Portfolio <i className="bi bi-arrow-up-right"></i></a>
        </div>
        </div>
        <img src={avatar} alt="" className={`${isNight && 'avatar-night-mode'}`}/>
        <div className={`about-social-icons ${isNight && 'night-mode-social-icons'}`}>
            <a href="https://github.com/soufianeoualla" 
               rel="noopener noreferrer" 
               target='_blank' 
            ><i className="bi bi-github"></i></a>

            <a href="https://www.linkedin.com/in/soufianeoualla" rel="noopener noreferrer" target='_blank' ><i className="bi bi-linkedin"></i></a>

            <a href="https://www.instagram.com/soufiane.oualla/"rel="noopener noreferrer" target='_blank' ><i className="bi bi-instagram"></i></a>

        </div>
        
    </div>
  )
}

export default About