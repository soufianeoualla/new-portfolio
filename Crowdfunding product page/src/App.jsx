
import './App.css'
import About from './components/About/About'
import Thanks from './components/Thanks'
import BackedAmount from './components/BackedAmount'
import Header from './components/Header'
import MainCard from './components/MainCard'
import { useState } from 'react'
import BackThisProject from './components/assets/BackThisProject'

function App() {

  const [isSelected,setisSelected]=useState(false)
  const[isBackBtnClicked,setIsBackBtnClicked]=useState(false)
  const [isMenuClicked,setIsMenuClicked]=useState(false)

  return (
    <>
      <div className={`container ${(isSelected||isBackBtnClicked || isMenuClicked) && 'overflow'}`}>
        <Header isMenuClicked={isMenuClicked}
                setIsMenuClicked={setIsMenuClicked} />
        <div className="cards">
        <MainCard isBackBtnClicked={isBackBtnClicked}
                  setIsBackBtnClicked={setIsBackBtnClicked} />
        <BackedAmount/>
        <About setisSelected={setisSelected} />
        </div>
        {isSelected &&<Thanks setisSelected={setisSelected} />}
        
      </div>

      {isBackBtnClicked && <BackThisProject setIsBackBtnClicked={setIsBackBtnClicked}
                                            setisSelected={setisSelected} />}
    </>
  )
}

export default App
