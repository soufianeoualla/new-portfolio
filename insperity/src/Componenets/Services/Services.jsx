import ServiceItem from "./ServiceItem"
import './Services.css'
import risk from '../assets/risk.png'

const Services = () => {
  return (
   <div className="services">
    <h1>Our Full-Service HR <span>Solution </span> <br />Delivers</h1>
    <div className="items">
        <ServiceItem 
        name={'Employee Benefits'} 
        icon= {<i className="fa-solid fa-file-invoice-dollar"></i>} />
        <ServiceItem 
        name={'HR Admin'} 
        icon= {<i className="fa-solid fa-user"></i>} />
        <ServiceItem 
        name={'Risk Management'} 
        icon= {<img src={risk} alt=""  />} />
        <ServiceItem 
        name={'HR Support and Technology'} 
        icon= {<i className="fa-solid fa-headset"></i>} />
        <div className="browse-more">
        <i className="fa-solid fa-arrow-right-long"></i>
        <p>Browse All</p>
        </div>
    </div>
   </div>
  )
}

export default Services