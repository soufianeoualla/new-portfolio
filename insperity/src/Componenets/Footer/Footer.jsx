import Banner from '../Reusable Items/Banner'
import logo from '../assets/logo.svg'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
       <Banner/>
        <div className="left">
            <img src={logo} alt="" />
            <div className="search">
                    <input type="text" placeholder='Search'/>
                    <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="social-icons">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-github"></i>

            </div>
        </div>
        <div className="middle">
            <strong>
                HR Solutions
            </strong>
            <ul>
                <li><a href="">full Service HR for Small Businesses</a></li>
                <li><a href="">Full service HR for Middle Market <br /> Businesses</a></li>
                <li><a href="">Human capital management & HR <br /> technology suite</a></li>
                
            </ul>
        </div>
        <div className="right">
            <div className="first">
                <strong>
                    Our Company
                </strong>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Coporates Citizenship</a></li>
                    <li><a href="">Culture and Values</a></li>
                </ul>
            </div>
            <div className="second">
                <strong>
                    Help
                </strong>
                <ul>
                    <li><a href="">Newsroom</a></li>
                    <li><a href="">Investor Relations</a></li>
                    <li><a href="">Locations</a></li>
                    <li><a href="">Partner With Us</a></li>
                    <li><a href="">Resources</a></li>
                </ul>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer