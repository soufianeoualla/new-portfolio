import { useState } from "react"
import icon_facebook from './assets/icon-facebook.svg'
import icon_up from './assets/icon-up.svg'
import icon_twitter from './assets/icon-twitter.svg'
import icon_instagram from './assets/icon-instagram.svg'
import icon_down from './assets/icon-down.svg'
import icon_youtube from './assets/icon-youtube.svg'


const OverView = ({isDark}) => {
    const[activity,setActivity]=useState([
        {
            platform :'facebook',
            activity:'Page Views',
            icon: icon_facebook,
            number: '87',
            up: '3%'
        },
        {
            platform :'facebook',
            activity:'Likes',
            icon: icon_facebook,
            number: '52',
            down: '2%'
        },
        {
            platform :'instagram',
            activity:'likes',
            icon: icon_instagram,
            number: '5462',
            up: '2257%'
        },
        {
            platform :'instagram',
            activity:'Profile Views',
            icon: icon_instagram,
            number: '52k',
            up: '1375%'
        },
        {
            platform :'twitter',
            activity:'Retweets',
            icon: icon_twitter,
            number: '117',
            up: '303%'
        },
        {
            platform :'twitter',
            activity:'Likes',
            icon: icon_twitter,
            number: '507',
            up: '553%'
        },
        {
            platform :'youtube',
            activity:'Likes',
            icon: icon_youtube,
            number: '107',
            down: '19%'
        },
        {
            platform :'youtube',
            activity:'Total Views',
            icon: icon_youtube,
            number: '1407',
            down: '12%'
        },
    ])
    const[isSelected,setIsSelected]=useState(null)
    
  return (
   <div className={`overview ${isDark && 'overview-dark '}`}>
    <h2>Overview - Today</h2>
    <div className="cards">

   
    {activity && activity.map((n,index)=>

        <div onMouseOver={()=>setIsSelected(index)}
        onMouseLeave={()=>setIsSelected(null)}

        key={n.platform} className={`cards-wrapper ${isDark && 'cards-wrapper-dark-mode'} ${isSelected === index && 'card-wrapper-hovred'} ${(isDark && isSelected === index) && 'card-wrapper-dark-mode-hovred'}`}>
                <div className="social-network">
                    <p>{n.activity} </p>
                    <img src={n.icon} alt="" />
                    
                </div>
                <div className="card-bottom">
                
                <h1>{n.number} </h1>
                    <div className={`${n.up? 'variation-up ': n.down && 'variation-down'}`}>
                    <img src={n.up ? icon_up : n.down && icon_down } alt="" />
                    <p>{n.up ? n.up : n.down} </p>
                </div>
                </div>
        </div>
    )}
     </div>
   </div>
  )
}

export default OverView