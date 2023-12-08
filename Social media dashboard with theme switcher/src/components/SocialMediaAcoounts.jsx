import { useState } from "react"
import icon_facebook from './assets/icon-facebook.svg'
import icon_up from './assets/icon-up.svg'
import icon_twitter from './assets/icon-twitter.svg'
import icon_instagram from './assets/icon-instagram.svg'
import icon_down from './assets/icon-down.svg'
import icon_youtube from './assets/icon-youtube.svg'



const SocialMediaAcoounts = ({isDark}) => {
    const [data,setData]=useState([
        {
            platform :'facebook',
            user:'@nathanf',
            icon: icon_facebook,
            followers: '1987',
            up: '12'
        },
        {
            platform :'twitter',
            user:'@nathanf',
            icon: icon_twitter,
            followers: '1044',
            up: '99'
        },
        {
            platform :'instagram',
            user:'@realnathanf',
            icon: icon_instagram,
            followers: '11k',
            up: '1099'
        },
        {
            platform :'youtube',
            user:'Nathan F.',
            icon: icon_youtube,
            followers: '8239',
            down: '144'
        }
    ])
    const[selectedIndex,setSelectedIndex] =useState(null)
  return (
       <>
       {data && data.map((n,index)=>
       
       <div key={n.user} className={`${n.platform === 'facebook'? 'facebook':
                                       n.platform === 'twitter' ? 'twitter':
                                       n.platform === 'instagram' ? 'instagram':
                                       n.platform === 'youtube' ? 'youtube': null}`}>
            <div onMouseOver={()=>setSelectedIndex(index)}
                    onMouseLeave={()=>setSelectedIndex(null)}
            className={`card-wrapper ${isDark && 'card-wrapper-dark-mode'} ${selectedIndex === index && 'card-wrapper-hovred'} ${(isDark && selectedIndex === index) && 'card-wrapper-dark-mode-hovred'}`}>
                <div className="social-network">
                    <img src={n.icon} alt="" />
                    <p>{n.user}</p>
                </div>

                <div className="followers-number">
                    <h1>{n.followers}</h1>
                    <p>{ n.platform === 'youtube' ?'SUBSCRIBERS': 'FOLLOWERS'}</p>
                </div>

                <div className={`${n.up? 'variation-up ': n.down && 'variation-down'}`}>
                    <img src={n.up ? icon_up : n.down && icon_down } alt="" />
                    <p>{n.up ? n.up : n.down} Today</p>
                </div>
            </div>
       </div>
       )}
       
       </> 
  )
}

export default SocialMediaAcoounts