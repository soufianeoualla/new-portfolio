
import { useState } from 'react'
import './App.css'
import ClientTestimonials from './components/ClientTestimonials'
import Footer from './components/Footer'
import Header from './components/Header'
import Images from './components/Images'
import Services from './components/Services'

function App() {
  
  const [isHoverd, setIshovred] =useState(false)

  return (
    <>
    <div className="container">
     <Header/>
     <Services isHoverd={isHoverd}
              setIshovred={setIshovred} />
     <ClientTestimonials/>
     <Images/>
     <Footer/>
    </div>
      
    </>
  )
}

export default App
