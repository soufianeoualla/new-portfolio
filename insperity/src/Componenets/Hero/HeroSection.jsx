import './Hero.css'
import hero_img from '../assets/hero.png'
const HeroSection = ({setContactClicked}) => {
  return (
    <main>
        <div className="text">
            <h1>
                <span>HR Solutions</span> <br />
                That Scale With Your Business
            </h1>
            <p>Streamlining your business operations curcial for efficiency and one way to achieve this is by managing your HR and payroll in a single system</p>
            <button onClick={()=>setContactClicked(true)}
            className="secondary-btn">
                Contact Sales
            </button>
        </div>
        <div className="hero">
                <img src={hero_img} alt="" />
        </div>
    </main>
  )
}

export default HeroSection