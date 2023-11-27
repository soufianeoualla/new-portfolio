
const Navbar = ({setContact,setIsClicked,isNight}) => {
    const handleClick = ()=>{
        setContact(true)
        setIsClicked(false)
    }
  return (
    <ul  >
                <li><a className={`${isNight && 'night-mode-navbar'}`}
                onClick={()=>setIsClicked(false)}
                href="#about">About</a></li>

                <li><a className={`${isNight && 'night-mode-navbar'}`}
                onClick={()=>setIsClicked(false)}
                 href="#skills">Skills</a></li>

                <li><a className={`${isNight && 'night-mode-navbar'}`}
                onClick={()=>setIsClicked(false)}
                href="#portfolio">Portfolio</a></li>

                <li><a className={`contact-btn ${isNight && 'night-mode-navbar'}`}
                onClick={handleClick} 
                href="#Contact">Contact</a></li>
            </ul>
  )
}

export default Navbar