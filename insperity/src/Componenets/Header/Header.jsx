import logo from '../assets/logo.svg'
import './Header.css'
import MobileNav from './MobileNav'
import NavList from './NavList'
import { Link } from 'react-router-dom'
const Header = ({setContactClicked,mobile,setMobile}) => {



    return (
    <header>
     
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    <nav className='desktop'>
            <NavList/>
        </nav>
          <div className='desktop'>

          <Link to="/login" className='sign-in'>Sign In</Link>

          <button onClick={()=>setContactClicked(true)}
          className='primary-btn'>
                  Contact Sales
          </button>
        </div>
        <i onClick={()=>setMobile(true)}
        className="fa-solid fa-bars"></i>

        {mobile && <MobileNav 
        setContactClicked={setContactClicked}
        setMobile={setMobile} />}

       
    </header>
  )
}

export default Header