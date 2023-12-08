
import { useState } from 'react'
import './App.css'

import SocialMediaAcoounts from './components/SocialMediaAcoounts'
import OverView from './components/OverView'


function App() {
  const [isDark,setIsDark]=useState(false)

  return (
    <>
      <div className={`container ${isDark && 'conatiner-dark-mode'}`}>
        <div className={`top ${isDark  &&'top-dark-mode'}`}>
          <div className={`title ${isDark && 'title-dark-mode'}`}>
            <h1> Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className={`dark-mode-wrapper ${isDark && 'dark-mode-wrapper-on'}`}>
            <p>Dark Mode</p>
            <div   onClick={()=>setIsDark(!isDark)}
            className={`dark-mode-toggle ${isDark && 'dark-mode-toggle-on'}`}>

              <div className={`circle ${isDark && 'circle-dark-mode'}`}></div>
            </div>
          </div>
        </div>
        <div className="upper-cards">
         
          <SocialMediaAcoounts isDark={isDark} />
          
        </div>
        
          <OverView isDark={isDark} />
        
      </div>
    </>
  )
}

export default App
