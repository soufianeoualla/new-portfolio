 import logo from './assets/images/logo.svg'


const Footer = () => {
  return (
    <footer>
        <div>
        <img src={logo} alt="" />
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        </div>
        

        <div className="social-icons">
            
            <a href=""><i className="fa-brands fa-square-facebook"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-square-x-twitter"></i></a>
            <a href=""><i className="fa-brands fa-pinterest"></i></a>
        </div>
    </footer>
  )
}

export default Footer