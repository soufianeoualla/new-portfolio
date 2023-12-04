import icon_m from './assets/logo-mastercraft.svg'
import bookmark from './assets/icon-bookmark.svg'
import bookmarked from './assets/icon-bookmarked.svg'
import { useState } from 'react'
const MainCard = ({setIsBackBtnClicked}) => {

    const[isClicked,setIsClicked]=useState(false)

  return (
    <div className="main-card">
        <div className="card-wrapper">
        <div className="icon-top">
            <img src={icon_m} alt="" className='mastercreaft-icon'/>
        </div>
        <div className="text">
            <h1>  Mastercraft Bamboo Monitor Riser</h1>
            <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>
        </div>
        <div className="back-bookmark-buttons">
            <button onClick={()=>setIsBackBtnClicked(true)}
            className="back-btn"> Back this project</button>


            {!isClicked && <div onClick={()=>setIsClicked(true)}
            className='bookmark'>
                <img src={bookmark} alt="" className='bookmark-icon' />
                <button className="bookmark-btn">
                <p>Bookmark</p>
                
            </button>
            </div>}

            {isClicked && <div onClick={()=>setIsClicked(false)}
            className="bookmarked bookmark">
                <img src={bookmarked} alt=""className='bookmark-icon' />
                <button className="bookmark-btn">
                
                Bookmarked
            </button>
            </div>}
            
        </div>
        </div>
       
    </div>
  )
}

export default MainCard