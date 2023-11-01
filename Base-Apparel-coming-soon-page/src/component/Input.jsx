
import { useState } from 'react'
import icon_error from './assets/icon-error.svg'



const Input = () => {

  const [email,setemail]= useState('')
  const [message ,setmessage] = useState('')

  const [isshowing, setisshowing]= useState(false)

  const handleInput = (e) =>{
    setemail(e.target.value)
  }
  const validation = ()=> {
    const rgEx = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

   if (rgEx.test(email)) setmessage('We will send you an email later')
   else if (email === '') {
      setmessage('email cannot be empty')
      setisshowing(true)
  }
    else if (!(rgEx.test(email))) {
      setmessage('Please provide a valid email')
      setisshowing(true)
  }
  }
  

  return (
    <div className="input" >
            <input  type="email" name="email" value={email}  placeholder="Email Address"  id="input-email" onChange={handleInput} />
            <button onClick={validation} type="submit"><i className="fa-solid fa-chevron-right" id="arrow"></i></button>
            {isshowing && <img src={icon_error} alt="" id="error" />}
            
             
            
            <p className="error-text ">{message} </p> 
            
    </div>
  )
}

export default Input