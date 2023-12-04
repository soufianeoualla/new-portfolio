import Navbar from './Navbar'
import logo from './assets/logo.svg'
import close_menu from './assets/icon-close-menu.svg'
import menu_icon from './assets/icon-hamburger.svg'
const Header = ({isMenuClicked,setIsMenuClicked}) => {
  return (
    <header>
        <div className="header-wrapper">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-desktop">
        <Navbar/>
        </div>
        { isMenuClicked && <div className="nav-mobile">
        <Navbar/>
        </div> }
        {!isMenuClicked && <img onClick={()=>setIsMenuClicked(true)}
        src={menu_icon} alt="" className='menu-icon'/>}
        {isMenuClicked && <img onClick={()=>setIsMenuClicked(false)}
        src={close_menu} alt="" className='close-icon'/>}

        </div>
        
    </header>
  )
}

export default Header