import arrow from '../assets/images/icon-arrow-down.svg'
import close from '../assets/images/icon-close-menu.svg'
import Company from './Company'
import Features from './Features'


const MobileMenu = ({setIsClicked,features,company,setMobileMenu}) => {
  return (
    <div className="mobile">
        <img src={close} alt="" className='close'
        onClick={()=>setMobileMenu(false)} />
   <ul className="mobile-menu">
    
            <li  onClick={()=>setIsClicked((prev)=> ({...prev , features: !prev.features}))}
            className='features' >
                <li className="features-mobile">
                <p>Features</p>
                    <img src={arrow} alt="" className="arrow"/>
                </li>
              { features && <Features/>}
                    
            </li>
                <li   
                onClick={()=>setIsClicked((prev)=> ({...prev , company: !prev.company}))}
                 className='company'>
                    <li className='company-mobile'>
                    <p>Company</p>
                    <img src={arrow} alt="" className="arrow"/>
                    </li>
                    {company && <Company/>}
                </li>
                <li><a href="">Careers</a></li>
                <li><a href="">About</a></li>
            
   </ul>
    <div className="buttons mobile-btn">
        <button className='login' >Login </button>
        <button className='register'>Register </button>
    </div>
</div>
  )
}

export default MobileMenu