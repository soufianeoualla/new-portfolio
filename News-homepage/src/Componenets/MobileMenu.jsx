import close from './assets/icon-menu-close.svg'
const MobileMenu = ({isClicked,setisClicked}) => {
  return (
    <div className="mobile-menu">
        <div className="close-img">
        <img src={close} alt="" className='close' onClick={()=>{setisClicked(false)}}/>
        </div>
        <ul className='mobile'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </div>
  )
}

export default MobileMenu