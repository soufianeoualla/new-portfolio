import { useState } from "react"
import tip from './assets/tip.jpg'
import tracking from './assets/tracking.jpg'
import chart from './assets/chart.jpg'
import notification from './assets/notification.jpg'

import 'swiper/css';
import 'swiper/css/pagination';




const Portfolio = ({isNight}) => {
    const[projects,setProjects]=useState([
        {
            id: 1,
            project: 'Tip calculator app using React',
            link:{
                href:'https://tip-calculator-app-neon-five.vercel.app/',
                github:'https://github.com/soufianeoualla/Tip-calculator-app/tree/8d712b69cb586612411c1287104739f24162aeb8/Tip%20calculator%20app',
                src: tip
            }
        },
        {
            id: 2,
            project: 'Time tracking dashboard using React, CSS grid.',
            link:{
                href:'https://time-tracking-dashboard-khaki-phi.vercel.app/',
                github: 'https://github.com/soufianeoualla/time-tracking-dashboard/tree/cc68727fecc0456e7ef7b5480ecdabfcba1c4b89/Time%20tracking%20dashboard',
                src: tracking
            }
        },
        {
            id: 3,
            project: 'Expenses chart component using React',
            link:{
                href:'https://expenses-chart-component-seven-xi.vercel.app/',
                github:'https://github.com/soufianeoualla/expenses-chart-component/tree/a37f649098c0c123740b1056d1e101d2232d7ca4/expenses-chart-component-main',
                src: chart
            }
        },
        {
            id: 4,
            project: 'Intro section with dropdown navigation Using React',
            link:{
                href:'https://notifications-page-orcin.vercel.app/',
                github:'https://github.com/soufianeoualla/Notifications-page/tree/8a33bfe9999de3e466b41f5876facc72207c0165/Notifications-page',
                src: notification
            }
        },
        
    ])

    
    const[indexHovred,setIndexHovred]=useState(null)
    
  return (
    <div className="portfolio" id="portfolio">
        <div className="wrapper">
            <h1 className={`${isNight && 'night-mode-text-heading'}`}>Latest Projects</h1>
            
            <div className="projects">
                
                    { projects.map((n,index)=>
                     <  div key={n.id} className={`project ${n. id === 1 ? 'project-1':
                      n.id=== 2 ? 'project-2':
                      n.id=== 3 ? 'project-3':
                      n.id=== 4 ? 'project-4':
                      null}`} >
                       
                        <div 
                            
                            onClick={()=>(setIndexHovred(index))}
                            
                            className={`project-img ${indexHovred===index && 'overflow-img'}`}>
                            <img  src={n.link.src} alt=""  
                            />
                            {indexHovred===index && <h3 className="heading">{n.project} </h3> }
                        
                            {indexHovred === index && <div className="project-btn">
                            <a href={n.link.github}><i className="bi bi-github"></i></a>
                            <a href={n.link.href}><i className="bi bi-arrow-up-right-square-fill"></i></a>
                             </div>}
                        </div>

                    </div>

                        
                )}


            </div>

            <a className={`browse-btn ${isNight && 'night-mode-browse-btn-portfolio'}`} href="https://www.frontendmentor.io/profile/soufianeoualla">Browse More <i className="bi bi-arrow-up-right-square-fill"></i></a>
        </div>
    </div>
  )
}

export default Portfolio