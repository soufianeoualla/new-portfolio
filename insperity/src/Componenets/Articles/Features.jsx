import team_img from '../assets/team-working.jpg'
import meeting from '../assets/meeting.jpg'
import './Features.css'
import arrow from '../assets/arrow.png'
const Features = () => {
  return (
    <article>
        <div className="background"></div>
            <div className="feature">
        
        <div className="left-side">
                
                <img src={meeting} alt="" className='img-1'/>
                <img src={team_img} alt="" className='img-2' />
                

        </div>
        <div className="right-side">
            <img src={arrow} alt="" className='arrow'/>
            <h1>Unbeatable Support Meets <span>Innovative </span>Technology</h1>
            <p>Unmatched Support: At Paragroup, we believe exceptional customer support is the cornestone of a successful business. Our dedicated team of professionals...</p>
            <div className="buttons">
                <button className="secondary-btn">
                    Small Businesses
                </button>
                <button className="primary-btn">
                    Midsize Businesses
                </button>
            </div>
        </div>
    </div>
    </article>
    
  )
}

export default Features