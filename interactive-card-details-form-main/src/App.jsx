
import './App.css'
import Card from './assets/Components/Card'
import { useState } from "react"
import Thankyou from './assets/Components/Thankyou'


function App() {
  const [values,setvalues] = useState({
    cardholderName:'',
    cardNumber: '',
    month:'',
    year:'',
    cvc:'',
  
  
  })

  const [errors,setErrors] =useState({
    cardholderName:'',
    cardNumber: '',
    date:'',
    cvc:'',
  })

  const [isConfirmed,setIsConfirmed] =useState(false)

  function validateCardholderName(){
    let chName = values.cardholderName
    
    const nameRegex = /^([A-Za-z]{3, })\s([A-Za-z]{3, })$/
    if(nameRegex.test(chName)){
      return true
    }

  }

  function ValidateCreditCardNumber() {

    var ccNum = values.cardNumber;
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    
  
    if (visaRegEx.test(ccNum)) {
      return true;
    } else if(mastercardRegEx.test(ccNum)) {
      return true;
    } else if(amexpRegEx.test(ccNum)) {
      return true;
    } else if(discovRegEx.test(ccNum)) {
      return true;
    }
  }

  const hasError = errors.cardNumber || errors.cardholderName || errors.cvc || errors.date

  const handleSubmit = ()=>{

    if(hasError){
      if(!values.cardholderName)setErrors((prev)=> ({...prev, cardholderName:"Can't be blank"}))
    else if (!validateCardholderName)setErrors((prev)=> ({...prev, cardholderName:"Invalid Name"}))
  



   if(!values.cardNumber) setErrors((prev)=> ({...prev, cardNumber:"Can't be blank"}))
   else if (!(ValidateCreditCardNumber))setErrors((prev)=> ({...prev, cardNumber:"Wrong Format, Please provide a valid card"}))

    const yearRegex = /^(20[3-9]\d|20[0-4]\d|2050)$/

    const monthregex =/^(0[1-9]|1[0-2])$/

    const today = new Date();
    const someday = new Date();
    someday.setFullYear(values.year, values.month, 1);

    
    if (someday < today) {
      setErrors((prev)=> ({...prev, date:"Invalid Date"}))
    }
    
    if(!values.month || !values.year) setErrors((prev)=> ({...prev, date:"Can't be blank"}))
    else if(!(monthregex.test(values.month))) setErrors((prev)=> ({...prev, date:"Invalid Date"}))
    else if(!(yearRegex.test(values.year)))
    setErrors((prev)=> ({...prev, date:"Invalid Date"}))


    const cvcRegex =/^[0-9]{3,4}$/


    if(!values.cvc) setErrors((prev)=> ({...prev, cvc:"Can't be blank"}))
    else if(!(cvcRegex.test(values.cvc)))setErrors((prev)=> ({...prev, cvc:"cvc Not Valid"}))
    }else  setIsConfirmed(true)

    

  }
  

  return (
    <>
      <div className="container">

        <Card cardholderName={values.cardholderName}
              cardNumber={values.cardNumber} 
              month={values.month}
              year={values.year}
              cvc={values.cvc} />



        {!isConfirmed && <div action="" className='form' >
      <label htmlFor="cardholderName">
        <p>Cardholder Name</p>
            <input type="text"
                    id="cardholderName"
                    name='cardholderName'
                    placeholder="e.g. Jane Appleseed"
                    value={values.cardholderName}
                    onChange={(e)=>setvalues((prev)=> ({...prev, cardholderName: e.target.value }))}
                    />
            {errors.cardholderName ? <p className='error'>{errors.cardholderName} </p> :null }
        </label>
        <label htmlFor="cardNumber">
            <p>Card Number</p>
            <input type="text"
                    name='cardNumber'
                    id="cardNumber"
                    placeholder="e.g. 1234 5678 9123 0000"
                    maxLength={19}
                    value={values.cardNumber.replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                    onChange={(e)=>setvalues((prev)=> ({...prev, cardNumber: e.target.value }))} />
           
           {errors.cardNumber ? <p className='error'>{errors.cardNumber} </p>: null }
        </label>

        <div className="date-cvc">
            <label htmlFor="MM YY" >
                <p>Exp. Date (MM/YY)</p>
                <div className='month-year'>
                    
                 <label htmlFor="MM">
                 
                <input type="number"
                  name="month"
                  id="MM"
                  placeholder="MM"
                  className="mm"
                  value={values.month}
                  onChange={(e)=>setvalues((prev)=> ({...prev, month: e.target.value }))}
                  maxLength={2}
                  />

                  {errors.date ? <p className='error'>{errors.date} </p> : null}

                 </label>


                 <label htmlFor="YY">
                <input type="number"
                 name="year" 
                 id="YY" 
                 placeholder="YY" 
                 className="yy" 
                 value={values.year}
                 onChange={(e)=>setvalues((prev)=> ({...prev, year: e.target.value }))}
                 maxLength={2}
                />
                        
                        
                 </label>
                
                </div>
                
            </label>
            <label htmlFor="cvc" className="cvc">
                <p>CVC</p>
                <input type="number" 
                name='cvc'
                id="CVC" 
                placeholder="e.g. 123" 
                maxLength={3}
                value={values.cvc}
                    onChange={(e)=>setvalues((prev)=> ({...prev, cvc: e.target.value 
                  }))}
                />
                {errors.cvc ? <p className='error'>{errors.cvc} </p> : null}
            </label>
        </div>

        <button onClick={handleSubmit}  className="btn" >Confirm</button>
    </div>}
    {isConfirmed&& <Thankyou setIsConfirmed={setIsConfirmed} />}
      </div>
    </>
  )
}

export default App
