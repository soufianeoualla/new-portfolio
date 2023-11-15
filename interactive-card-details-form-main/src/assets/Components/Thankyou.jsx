
import icon_complete from './assets/images/icon-complete.svg'

const Thankyou = ({setIsConfirmed}) => {
  return (
        <div className="thankyou">
            <img src={icon_complete} alt="" />
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <button onClick={()=>setIsConfirmed(false)} className="btn thankyou-btn">Confirm</button>
        </div>
    )
}

export default Thankyou