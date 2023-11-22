import logo from './assets/images/logo.svg'
import arrow_down from './assets/images/icon-arrow-down.svg'
import menu_mobile from './assets/images/icon-hamburger.svg'
import { Navbar } from './Navbar'
import { MobileMenu } from './MobileMenu'
import { useState } from 'react'

const Header = () => {

    const [isclicked,setisClicked]=useState(false)
  return (
    <>
    <header>
    <div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
         <Navbar/>
        {isclicked && <MobileMenu/>}
        <img onClick={()=>setisClicked(!isclicked)} src={menu_mobile} alt="" className='mobile-menu' />
        
    </div>

    <div className="below-header">
        <h1> We are creatives</h1>
        <img src={arrow_down} alt="" />
    </div>
    </header>
    
    </>
  )
}

export default Header