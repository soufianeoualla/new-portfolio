
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Header from './components/Header/Header'

function App() {
  
  const[contact,setContact]=useState(false)

  const[isClicked,setIsClicked] =useState(false)

  const [isNight,setisNight] =useState(false)

 

  return (
    <>
      <div className={`container ${((contact || isClicked) && !isNight ) ? 'overflow': (isNight )  ? 'container-night-mode ': isNight && (contact || isClicked)  ? 'container-night-mode overflow':null}`}>
       
       <Header contact={contact}
               setContact={setContact}
               isClicked={isClicked}
               setIsClicked = {setIsClicked}
               isNight={isNight}
               setisNight={setisNight} />

        <About contact={contact}
               setContact={setContact}
               isNight={isNight}
                />

        {contact && <Contact contact={contact}
                             setContact={setContact} />}

        <Skills  isNight={isNight}/>

        <Portfolio  isNight={isNight}  />
        <Footer/>
      </div>
      
    </>
  )
}

export default App
