import { MobileNavBar } from "./MobileNavBar"
import DesktopNavbar from "./desktopNavbar"

const Header = ({contact,setContact,isClicked,setIsClicked,isNight,setisNight}) => {

  

  return (
    <header>
    
      <div className="logo">
            <p>SoufianeDev</p>
        </div>
        <div>
        { !isClicked && <DesktopNavbar setContact ={setContact}
                                        contact={contact}
                                        isNight={isNight} />}

        {isClicked && <MobileNavBar setContact={setContact}
                                    contact={contact}
                                    setIsClicked={setIsClicked}
                                    isNight={isNight} />}
                                    
       { !isNight ? <i onClick={()=>setisNight(true)}
        className="bi bi-moon-fill night-mode"></i>: isNight && <i onClick={()=>setisNight(false)}
        className="bi bi-brightness-high-fill light-mode"></i>}

        <i onClick={()=>setIsClicked(true)}
        className="bi bi-list  menu-mobile " ></i>

       

       
        </div>
        
        
     
        
        
    </header>        

  )
}

export default Header