import Navbar from "./Navbar"

export const MobileNavBar = ({setIsClicked,setContact,isNight}) => {
  return (
    <nav className="mobile">
      <i onClick={()=>setIsClicked(false)}
      className="bi bi-x-lg " id="close-icon"></i>
      <Navbar setContact={setContact}
              setIsClicked={setIsClicked}
              isNight={isNight} />
    </nav>
  )
}
