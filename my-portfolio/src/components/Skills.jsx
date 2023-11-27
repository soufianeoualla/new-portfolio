import { useState } from "react"



const Skills = ({isNight}) => {

    const[skills,setSkills] =useState([
        {
             
             name: 'HTML',
             percentage: 90
        },
        {   
            
            name: 'CSS',
            percentage: 70
        },
        {   
            
            name: 'Bootstrap',
            percentage: 70
        },
        {   
            
            name: 'Taillwind-CSS',
            percentage: 60
        },
        {   
            
            name: 'JavaScript',
            percentage: 50
        },
        {   
            
            name: 'ReactJs',
            percentage: 50
        },
    ])
  return (
    <section className="skills" id="skills">
        
        <div className="wrapper">
            <h1 className={`${isNight && 'night-mode-text-heading'}`} >Skills</h1>
            <div className="skills-items">
                {skills && skills.map((n)=>
                    <div key={n.skill} className="skill">
                        <div>
                        
                        <h3 className={`${isNight && 'night-mode-text-heading'}`}>{n.name} </h3>
                        <b className={`${isNight && 'night-mode-text-heading'}`}>({n.percentage}%) </b>
                        </div>
                        
                        <div className={`bar ${isNight && 'night-mode-bar'}`} >
                            <div className="percentage" style={{width:`${n.percentage}%`}}></div>
                            <i  className={`bi bi-circle-fill circle-icon ${isNight && 'night-mode-circle'}`} style={{left:`${n.percentage -3}%`}}></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div className="lower-wave"></div>
    </section>
  )
}

export default Skills