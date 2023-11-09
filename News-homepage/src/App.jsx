
import { useState } from 'react'
import './App.css'
import Header from './Componenets/Header'
import Home from './Componenets/Home'
import MobileMenu from './Componenets/MobileMenu'
import Popular from './Componenets/Popular'

function App() {
  const[isClicked,setisClicked ] = useState(false)

  return (
    <>
    {isClicked && <MobileMenu isClicked={isClicked}
                setisClicked={setisClicked} />}
    <div className="container">
     
      <Header isClicked={isClicked}
              setisClicked={setisClicked} />
      
      <Home/>
      <Popular/>
    </div>
    
    </>
  )
}

export default App
