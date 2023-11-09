import logo from './assets/logo.svg'

import menu from './assets/icon-menu.svg'
const Header = ({isClicked,setisClicked}) => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <nav    className="navbar">
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>

        {!isClicked && <div className="mobile-navbar">
          <img src={menu} alt="" onClick={()=>{setisClicked(true)}}/>
        </div>}

        
    </div>
  )
}

export default Header