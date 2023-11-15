import card_logo from './assets/images/card-logo.svg'
const Card = ({cardholderName,cardNumber,month,year,cvc}) => {
  return (
    <div className="card">
        <div className="front">
            <div className="card-logo">
                <img src={card_logo} alt="" />
            </div>
            

            
            <div className="card-details">
                <p className="card-number">{cardNumber? cardNumber :" 0000 0000 0000 0000"}</p>
                <div>
                 <p className="cardholder">{cardholderName ? cardholderName : 'Jane appleseed'}</p> 
                <p className="expired-date">{month? month : '00'}/{year ? year : "00"} </p>
                </div>
                
            </div>

        </div>

        <div className="back">
            <div className="cvc-number">
                <p>{cvc ? cvc : '000'}</p>
            </div>
        </div>
    </div>
  )
}

export default Card