import emily  from './assets/images/image-emily.jpg'
import thomas from './assets/images/image-thomas.jpg'
import jennie from './assets/images/image-jennie.jpg'
const ClientTestimonials = () => {
  return (
    <div className="client-testimonials">
        <h3>Client testimonials</h3>
        <div className='clients'>
        <div className="client">
            <img src={emily} alt="" />
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <div className="client-name">
                <b>Emily R.</b>
                <small>Marketing Director</small>
            </div>
        </div>
        <div className="client">
            <img src={thomas} alt="" />
            <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <div className="client-name">
                <b>Thomas S.</b>
                <small>Chief Operating Officer</small>
            </div>
        </div>
        <div className="client">
            <img src={jennie} alt="" />
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div className="client-name">
                <b>Jennie F.</b>
                <small>Business Owner</small>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ClientTestimonials