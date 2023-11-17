import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/icon-arrow-down.svg'
import Features from './Features'
import Company from './Company'
import menu_icon from '../assets/images/icon-menu.svg'

import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Header = ({setMobileMenu,mobileMenu}) => {

    const[isClicked,setIsClicked] =useState({
        features: false,
        company : false
    })

   

  return (
    <>
   {mobileMenu && <MobileMenu  setIsClicked={setIsClicked}
                features={isClicked.features}
                company={isClicked.company}
                setMobileMenu={setMobileMenu} />}
    <div className="header">
        <div className="navbar">
            <img src={logo} alt="" />
            <ul className='desktop-menu'>
            <li  
               onClick={()=>setIsClicked((prev)=> ({...prev , features: !prev.features}))}
            className='features'>
              <p>Features</p>
                    <img src={arrow} alt="" className="arrow"/>
            </li>
                <li   onClick={()=>setIsClicked((prev)=> ({...prev , company:  ! prev.company }))}
                
                

                 className='company'>
                    <p>Company</p>
                    <img src={arrow} alt="" className="arrow"/>
                </li>
                <li><a href="">Careers</a></li>
                <li><a href="">About</a></li>
            </ul>
            
        
        </div>
        <img src={menu_icon} alt=""  className='menu-icon'
        onClick={()=>setMobileMenu(true)}/>
        <div className="buttons">
            <button className='login' >Login </button>
            <button className='register'>Register </button>
        </div>
        {(isClicked.features && !mobileMenu) && <Features/>}
       { (isClicked.company && !mobileMenu )&& <Company/>}
    </div>
    
    
    </>
  )
}

export default Header