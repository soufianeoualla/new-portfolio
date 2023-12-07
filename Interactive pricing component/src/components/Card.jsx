import icon_check from './assets/icon-check.svg'
import {  useEffect, useRef, useState } from 'react'
const Card = () => {
    const [data,setdata]=useState({

        

        prices:{
            0:{
                pageviews:'10k',
                price: '8.00'
            },
            1:{
                pageviews:'50k',
                price: '12.00'
            },
            2:{
                pageviews:'100k',
                price: '16.00'
            },
            3:{
                pageviews:'500k',
                price: '24.00'
            },
            4:{
                pageviews:'1M',
                price: '36.00'
            }
        }
    })
    


    const[price,setPrice]=useState()
    const[pageviews,setPageviews]=useState()
    const[isYearly,setIsYearly]=useState(false)
    

    const  rangeInput =  useRef(2)
    
    useEffect(() => {
        // Handle initial values when the component mounts
        handleRangeInput();
      }, []);

    const handleRangeInput = ()=>{
        
        let price;
        price = data.prices[rangeInput.current.value].price
        setPrice(price)
         let pageviews = data.prices[rangeInput.current.value].pageviews
         setPageviews(pageviews)
                     
    }
  return (
    <div className="card">
        <div className="top">
            <p>{pageviews} pageviews</p>
            <p><span>${isYearly? price*0.75 : price} </span>/month</p>
        </div>
        <div className="slider">
          <input type="range"
           name="" id="" 
           min={0}  
           max={4} 
           value={rangeInput.current.value} 
           ref={rangeInput} 
           onChange={handleRangeInput}
           style={{
            background: `linear-gradient(to right,  hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${100* (rangeInput.current.value) /4}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%)100%)`
          }}/>
        </div>

        <div className="billing">
            <p>Monthly Billing</p>
            <div className="toggle">
                <div onClick={()=>setIsYearly(!isYearly)}
                className={`toggle-bar ${isYearly && 'isyearly'}`}>
                    <div className={`off-on-circle ${isYearly && 'isyearly-circle'}`}>

                    </div>
                </div>
            </div>
            
            <p>Yearly Billing</p>
            <small>25% discount</small>
            <small className='mobile'>-25%</small>
        </div>
        <div className="cta">
            <div className="features">
                <ul>
                    <li><img src={icon_check} alt="" />Unlimited websites</li>
                    <li><img src={icon_check} alt="" />100% data ownership</li>
                    <li><img src={icon_check} alt="" />Email reports</li>
                </ul>
            </div>
            <button> Start my trial</button>
        </div>
    </div>
  )
}

export default Card