import illustration_desktop from './assets/illustration-sign-up-desktop.svg'
import illustration_mobile from './assets/illustration-sign-up-mobile.svg'


const Hero = () => {
  return (
    <div className="hero">
        <picture>
        <source media="(min-width:768px )" srcSet={illustration_desktop} sizes="" />
        <img src={illustration_mobile} alt="" />
        </picture>
    </div>    
)
}

export default Hero