import { Link } from "react-router-dom"
import NavList from "./NavList"
const MobileNav = ({setContactClicked,setMobile}) => {
  const handleContactClick = ()=>{
    setContactClicked(true)
    setMobile(false)
  }
  return (
    <div className="mobile-nav">
      <i onClick={()=>setMobile(false)}
        className="fa-solid fa-x"></i>
        <nav>
            
            <NavList/>
            <div>

          <Link to="/login" className="sign-in">Sign In</Link>

          <button onClick={handleContactClick}
          className='primary-btn'>
                  Contact Sales
          </button>
        </div>
        </nav>
        
    </div>
  )
}

export default MobileNav