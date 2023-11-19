
import avatar from './Components/assets/images/image-jeremy.png'

import work from './Components/assets/images/icon-work.svg'
import play from './Components/assets/images/icon-play.svg'
import study from './Components/assets/images/icon-study.svg'
import exercice from './Components/assets/images/icon-exercise.svg'
import social from './Components/assets/images/icon-social.svg'
import selfCare from './Components/assets/images/icon-self-care.svg'
import ellipsis from './Components/assets/images/icon-ellipsis.svg'


import './App.css'
import { useState } from 'react'

function App() {
  const [data,setData]=useState(
    [
      {
        "title": "Work",
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }  
        }
        
      },
      {
        "title": "Play",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }
    ]
  )


  const[isclicked,setIsClicked]=useState({
    daily: false,
    weekly: true,
    monthly : false
  })





  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="avatar">
            <img src={avatar} alt="" className='avatar-img'/>
            <div>
            <p>Report for</p>
            <h1>Jeremy <br /> robson</h1>
            </div>
            
          </div>
          <div className="time">
            <ul>
              <li  className={`${isclicked.daily && 'clicked'}`}
              onClick={()=>setIsClicked((prev)=>({...prev, daily:true, weekly: false , monthly:false}))}>Daily</li>

              <li className={`${isclicked.weekly && 'clicked'}`}
              onClick={()=>setIsClicked((prev)=>({...prev, daily:false, weekly: true , monthly:false}))} >Weekly</li>

              <li className={`${isclicked.monthly && 'clicked'}`}
              onClick={()=>setIsClicked((prev)=>({...prev, daily:false, weekly: false , monthly:true}))}>Monthly</li>

            </ul>
          </div>
        </div>
        <div className="items">
          {data && data.map((n)=>
              
            <div key={n.title} className="activity">
                <div className={`icon ${n.title==='Work'? 'work'
                                       :n.title ==='Play'? 'play'
                                       :n.title==='Study'? 'study' 
                                       :n.title === 'Exercise' ? 'exercise' 
                                       :n.title === 'Social'? 'social'
                                       :n.title === 'Self Care' ? 'self-care'
                                       : null }` }>
                  {n.title === 'Work' && <img src={work} alt="" />}
                  {n.title === 'Play' && <img src={play} alt="" />}
                  {n.title === 'Study' && <img src={study} alt="" />}
                  {n.title === 'Exercise' && <img src={exercice} alt="" />}
                  {n.title === 'Social' && <img src={social} alt="" />}
                  {n.title === 'Self Care' && <img src={selfCare} alt="" />}
                </div>
                <div className="activity-details">
                  <div className="activity-name">
                    <b>{n.title}</b>
                    <img src={ellipsis} alt="" />
                  </div>

                    <div className='hours'>
                  {isclicked.daily && <h1>{n.timeframes.daily.current <=1 ? `${n.timeframes.daily.current}hr` :`${n.timeframes.daily.current}hrs`}  </h1> }

                  {isclicked.weekly && <h1>{n.timeframes.weekly.current <=1 ? `${n.timeframes.weekly.current}hr` :`${n.timeframes.weekly.current}hrs`}  </h1> }

                  {isclicked.monthly && <h1>{n.timeframes.monthly.current <=1 ? `${n.timeframes.monthly.current}hr` :`${n.timeframes.monthly.current}hrs`}  </h1> }


                  {isclicked.daily && <p>Last Week - {n.timeframes.daily.previous <=1 ? `${n.timeframes.daily.previous}hr` :`${n.timeframes.daily.previous}hrs`}  </p> }

                  {isclicked.weekly && <p>Last Week - {n.timeframes.weekly.previous <=1 ? `${n.timeframes.weekly.previous}hr` :`${n.timeframes.weekly.previous}hrs`}  </p> }

                  {isclicked.monthly && <p>Last Week - {n.timeframes.monthly.previous <=1 ? `${n.timeframes.monthly.previous}hr` :`${n.timeframes.monthly.previous}hrs`}  </p> }
                  </div>
                  
                </div>
            </div>
          

          )}
        </div>


      </div>
    </>
  )
}

export default App
