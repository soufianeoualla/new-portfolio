import Navbar from "./Navbar"

const DesktopNavbar = ({setContact,setIsClicked,isNight}) => {
  return (
    <nav className="desktop">
        <Navbar setContact={setContact}
                setIsClicked={setIsClicked}
                isNight={isNight} />
    </nav>
  )
}

export default DesktopNavbar