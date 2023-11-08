import { useState } from "react"
import icon_arrow from './Components/assets/icon-arrow.svg'
import IsLeap from "./functions.js"
import monthsAndDays from './constants.js'
import AgeResult from "./Components/AgeResult.jsx"
 const App = () => {

  const [formData,setformData]=useState({
    day:'',
    month :'',
    year:''
  })

  const [output,setoutput] = useState({
    days: '',
    months:'',
    years: '' 
  })


  const[formError,setformError] = useState({
    day:'',
    month :'',
    year:'',
    generic : ''
  })

  const hasError = formError.day || formError.month || formError.year || formError.generic

  const dateDiff = (date) => {
    date = date.split("-");
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const yy = parseInt(date[0]);
    const mm = parseInt(date[1]);
    const dd = parseInt(date[2]);
    let years, months, days;

    months = month - mm;
    if (day < dd) {
      months = months - 1;
    }

    years = year - yy;
    if (month * 100 + day < mm * 100 + dd) {
      years = years - 1;
      months = months + 12;
    }

    days = Math.floor(
      (today.getTime() - new Date(yy + years, mm + months - 1, dd).getTime()) /
        (24 * 60 * 60 * 1000)
    );

    return { years: years, months: months, days: days };
  };

  const handleSubmit = (day, month ,year) =>{

    const dayAsNumber = Number(day)
    const monthAsNumber = Number(month)
    const yearAsNumber = Number(year)

    const today = new Date()
    const chosenDate = new Date(year,month-1,day)

    const currentMonth = monthsAndDays.find((item)=> item.month === monthAsNumber)

    const validateForFebruary = ()=>{
      if(monthAsNumber===2){
        let maxDays;
        if(IsLeap(yearAsNumber)) {
          maxDays = currentMonth?.days?.leap
        }else{
          maxDays = currentMonth?.days?.common
        }
        if(maxDays >= dayAsNumber) return true
        else return false
      }
      return false
    }
    

    const isDayInputValid = dayAsNumber >=1 && ((monthAsNumber!==2 && dayAsNumber <= (currentMonth?.days || 31)) || validateForFebruary())

    const isMonthInputValid = monthAsNumber >=1 && monthAsNumber <=12

    const isYearInputValid = yearAsNumber>=1 && yearAsNumber <= today.getFullYear()

    const isPastDate = today - chosenDate < 0 


    


    if(!day) setformError((prevState)=>({
      ...prevState ,
      day:'this field is required',
      month: formError.month && isMonthInputValid ? '': prevState.month,
      year: formError.year && isYearInputValid ? '': prevState.year }))

    if(!month) setformError((prevState)=>({
      ...prevState ,
      day: formError.day && isDayInputValid ? '': prevState.day,
      month:'this field is required',
      year: formError.year && isYearInputValid ? '': prevState.year }))


    if(!year) setformError((prevState)=>({
      ...prevState ,
      day: formError.day && isDayInputValid ? '': prevState.day,
      month: formError.month && isMonthInputValid ? '': prevState.month,
      year:'this field is required'}))




      const isPrecheckValid = isDayInputValid && isMonthInputValid && isYearInputValid 

    if(!isPrecheckValid){

    if(!isDayInputValid && day)setformError((prevState)=>({
      ...prevState ,
      day:'Must be a valid Day',
      month: formError.month && isMonthInputValid ? '': prevState.month,
      year: formError.year && isYearInputValid ? '': prevState.year,
      generic:'' }))

    if(!isMonthInputValid && month)setformError((prevState)=>({
      ...prevState ,
      day: formError.day && isDayInputValid ? '': prevState.day,
      month:'Must be a valid month',
      year: formError.year && isYearInputValid ? '': prevState.year,
      generic:'' }))

    if(!isYearInputValid && year)setformError((prevState)=>({
      ...prevState ,
      day: formError.day && isDayInputValid ? '': prevState.day,
      month: formError.month && isMonthInputValid ? '': prevState.month,
      year:'Must be a valid Year',
      generic:''}))

    
    
  
    } else if(isPastDate && isPrecheckValid)
    setformError((prevState)=>({
      ...prevState ,
      day: formError.day && isDayInputValid ? '': prevState.day,
      month: formError.month && isMonthInputValid ? '': prevState.month,
      year: formError.year && isYearInputValid ? '': prevState.year,
      generic:'Must be a date in the past'}))
    
      else {
        if(hasError){
          setformError({
            day:'',
            month :'',
            year:'',
            generic : ''
          })
        }

        const formattedDate = `${year}-${month}-${day}`

        const {years , months , days } = dateDiff(formattedDate)

        setoutput({
          days: days,
          months:months,
          years: years 
        })

        setformError(()=>({
          day:'',
          month :'',
          year:'',
          generic : ''
        }))
      }

  }
  return (
    <div className="container">
      <div className="header">
      <div className="date-input">
        <div className="day-input">
          <p>Day</p>
          <label htmlFor="day">
            <input type="number"  
            id="day"
            placeholder="DD"
            value={formData.day}
            onChange={(e) =>
              setformData((prevState) => ({
                ...prevState,
                day: e.target.value,
              }))
            }/>
          </label>
          
          {formError.day && <p className="error">{formError.day} </p>}
        </div>
        <div className="month-input">
          <p>Month</p>
          <label htmlFor="month">
            <input type="number"
            id="month"
            placeholder="MM"
            value={formData.month}
            onChange={(e) =>
              setformData((prevState) => ({
                ...prevState,
                month: e.target.value,
              }))
            } />
          </label>
          {formError.month && <p className="error">{formError.month} </p>}
        </div>

        <div className="year-input">
          <p>Year</p>
          <label htmlFor="year">
            <input type="number" 
            id="year"
            placeholder="YYYY"
            value={formData.year}
            onChange={(e) =>
              setformData((prevState) => ({
                ...prevState,
                year: e.target.value,
              }))
            }/>
          </label>
          {formError.year && <p className="error">{formError.year} </p>}
        </div>
      </div>
      
      <div className="button">
    <button 
    onClick={()=>{handleSubmit(formData.day, formData.month, formData.year)}}>
      <img src={icon_arrow}
      alt="" 
      className="arrow" />
    </button>
    <div className="line"></div>
  </div>
      
      </div>
      <AgeResult output={output}/>
    </div>
  )
}

export default App