import CardJourney from './CardJourney'
import './Journey.css'
import nsp from '../assets/nsp.png'
import consumer_logo from '../assets/consumeraffairs-logo.png'
import bounded from '../assets/bounded.png'
const Journey = () => {
  return (
    <article id='journey'>
        <div className="journey">
            <h1>We Support Your Business With Award-Winning <span> Expertise</span></h1>
            <p>Your people are your most valuable resource. When you have better Hh support you will nave al better bottom Ine. ve designed our hk support services to lighten your admmistrative. load and maximize your productivity while managing risks.</p>
            <div className="cards">
                <CardJourney 
                p={'Established in'} 
                number={'1986'} />
                 <CardJourney 
                 img={<img src={nsp} alt="" />
                }
                />
                <CardJourney 
                 img={<img src={consumer_logo} alt="" />
                }
                icons={<i className="fa-solid fa-star"></i>}
                p={"Insperity's overall satisfaction rating"}
                />
                <CardJourney 
                 img={<img src={bounded} alt="" />
                }
                />
                <CardJourney 
                 p={'Locations nationwide'}
                 number={'90+'}
                />
                
            </div>
            <button className="secondary-btn">
                Learn More About Insperity
            </button>
        </div>
    </article>
  )
}

export default Journey