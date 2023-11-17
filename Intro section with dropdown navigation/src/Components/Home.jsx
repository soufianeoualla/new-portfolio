import databiz from './assets/images/client-databiz.svg'
import audiophile from './assets/images/client-audiophile.svg'
import meet from './assets/images/client-meet.svg'
import maker from './assets/images/client-maker.svg'
import hero_desktop from './assets/images/image-hero-desktop.png'
import hero_mobile from './assets/images/image-hero-mobile.png'

const Home = () => {
  return (
   <div className="home">
    <div className="left-side">
        <h1>Make <br />remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.</p>

        <button className="learn-more"><a href="#">Learn More</a></button>
        <div className="clients">
            <img src={databiz} alt="" />
            <img src={audiophile} alt="" />
            <img src={meet} alt="" />
            <img src={maker} alt="" />
        </div>
    </div>

    <div className="right-side">
       <picture>
        <source  media="(min-width:768px )" srcSet={hero_desktop} />
        <img src={hero_mobile} alt=""  />
       </picture>
    </div>
   </div>
  )
}

export default Home