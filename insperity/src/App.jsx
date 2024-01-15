
import { useState } from 'react'
import './App.css'
import ConatctForm from './Componenets/Contact/ConatctForm.jsx'
import ThankYou from './Componenets/Contact/ThankYou.jsx'
import Login from './Componenets/Login/Login.jsx'
import { Home } from './Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  const[contactClicked,setContactClicked]=useState(false)

  const[thankyou,setThankYou]=useState(false)

  const[mobile,setMobile]=useState(false)

  

  return (
    <>
    <Router>
      <Routes>

        <Route  path='/' element={  <Home
          contactClicked={contactClicked}
          thankyou={thankyou}
          setContactClicked={setContactClicked}
          setThankYou={setThankYou}
          setMobile={setMobile}  
          mobile={mobile}/>
        }
           />
          <Route path='/login' element={ <Login/>} />

      </Routes>
    
    </Router>
    
      

    {contactClicked && <ConatctForm
      
    setContactClicked={setContactClicked} 
    setThankYou={setThankYou}
    setMobile={setMobile} />}
      

    {thankyou && <ThankYou
    setThankYou={setThankYou} />}

   

      
    </>
  )
}

export default App
