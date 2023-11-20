import dollar_icon from './assets/images/icon-dollar.svg'
import person_icon from './assets/images/icon-person.svg'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [values,setValues]=useState({
    bill: '',
    numberOfPeople: ''
  })

  const[selectedTip,setSelectedTip]=useState('')

  const [customTip, setCustomTip] = useState('');

  const[error,setError] = useState('')

  const [output, setOutput]=useState({
    tipAmount: '',
    total:''
  })

  const handleTipChange = (tip) => {
    setSelectedTip(tip);
    calculateTotalAmount(values.bill, tip, values.numberOfPeople);
  };
  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    calculateTotalAmount(values.bill, e.target.value , values.numberOfPeople);
  };

  const calculateTotalAmount = (bill, tip,nOfPeople) => {
    const billFloat = parseFloat(bill);
    const tipFloat = parseFloat(tip);
    const numberOfPeopleNumber =Math.round(nOfPeople)
    if (numberOfPeopleNumber=== 0) return setError("Can't be a zero")
      
    else if (numberOfPeopleNumber > 0)  { 
      const tipAmount =  ((billFloat * tipFloat) / 100) /
      numberOfPeopleNumber;
      let total = (tipAmount*numberOfPeopleNumber + billFloat)/numberOfPeopleNumber
      
      setOutput((prev)=>({...prev, tipAmount: tipAmount.toFixed(2)}))
      setOutput((prev)=>({...prev, total: total.toFixed(2)}))
      setError("")}
    
  };
  
  const handleReset =()=>{
    setCustomTip('')
    setSelectedTip(undefined)
    setError('')
    setOutput((prev)=>({...prev,tipAmount:'', total:''}))
    setValues((prev)=>({...prev,bill:'', numberOfPeople:''}))
  }

  return (
    <>
    <p className='header'>SPLI <br /> TTER</p>
      <div className="container">
        <div className="left-side" >
          <div className="bill">
            <p>Bill</p>
            <input type="number"
              name='bill'
              placeholder='0'
              value={values.bill}
              onChange={(e)=>setValues((prev)=>({...prev, bill:e.target.value}))}/>
            <img src={dollar_icon} alt="" />
          </div>
          <div className="select-tip">
            <p>Select Tip %</p>
            <div>
                {[5, 10, 15, 20, 25].map((tip) => (
              <button key={tip} onClick={() => handleTipChange(tip)}>
                {tip}%
              </button>
                ))}

               <input type="number" placeholder='Custom' value={customTip} onChange={handleCustomTipChange} />
          </div>
          </div>

          <div className="numberofpeople">
            <p>Number of People</p>
            <input type="number"  placeholder='0'
            value={values.numberOfPeople}
            onChange={(e)=>setValues((prev)=>({...prev, numberOfPeople : e.target.value}))}/>
            <img src={person_icon} alt="" />
           {error ? <p className='error'>{error}</p> : ''}
          </div>
        </div>


        <div className="right-side">
          <div className="tip-amount">
            <div>
              <b>Tip Amount</b>
              <p>/ person</p>
            </div>
            

            <div className="amount">
            <h1>${output.tipAmount  ? output.tipAmount : '0.00'} </h1>
            </div>
          </div>

          <div className="total">
            <div>
              <b>Total</b>
              <p>/ person</p>
              
            </div>

            <div className="total-amount">
            <h1>${output.total ? output.total : '0.00'} </h1>
            </div>
          </div>

          <button  onClick={handleReset} className='reset'>RESET</button>
        </div>
      </div>
    </>
  )
}

export default App
