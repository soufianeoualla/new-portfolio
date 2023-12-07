import { useState } from 'react'
import circles from './assets/pattern-circles.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="title">
          <img src={circles} alt="" className='circles'/>
        <h1>
         Simple, traffic-based pricing
        </h1>
        <p>
          Sign-up for our 30-day trial. No credit card required. 
        </p>
        </div>
       
        <Card/>

      </div>
    </>
  )
}

export default App
