import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home'

function App() {

  const[mobileMenu,setMobileMenu] = useState(false)

  return (
    <>
    <div className={`container ${mobileMenu ? 'overflow': null}  `}>
    <Header mobileMenu={mobileMenu}
            setMobileMenu= {setMobileMenu} />
    <Home/>
    </div>
    
    </>
  )
}

export default App
