import transform from './assets/images/desktop/image-transform.jpg'
import stand_out from './assets/images/desktop/image-stand-out.jpg'
const Services = () => {
  return (
    <div className="services">
        <div className="service-item">
            <div className='text'>
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing   in helping brands grow fast. 
                 Engage your clients through compelling visuals that do most of the marketing for you.</p>
                 
                    
                    <a className='learn-more' href=''>LEARN MORE</a>
                 
                
                
            </div>
            <img src={transform} alt="" />
        </div>

        <div className="service-item">
            <div className='text'>
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                
                    
                    <a  className='learn-more pink' href=''>LEARN MORE</a>
                 
            </div>
            <img src={stand_out} alt="" />
        </div>

        <div className="service-item">
        <div className="graphic-design">
            <h2>Graphic design</h2>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="photography">
            <h2>Photography</h2>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
        </div>
    </div>
  )
}

export default Services