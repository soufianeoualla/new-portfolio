import { useState } from "react"


const Chart = () => {

    const[spend,setSpend]= useState([
        {
          "id": 1,  
          "amount": 17.45,
          "day": "mon",
          
        },
        {
            "id": 2, 
          "amount": 34.91,
          "day": "tue",
          
        },
        {
            "id": 3,    
          "amount": 52.36,
          "day": "wed",
          
        },
        {
            "id": 4, 
          "amount": 31.07,
          "day": "thu",
          
        },
        {
            "id": 5, 
          "amount": 23.39,
          "day": "fri",
          
        },
        {
            "id": 6, 
          "amount": 43.28,
          "day": "sat",
          
        },
        {
            "id": 7, 
          "amount": 25.48,
          "day": "sun",
          
        }
      ])


      
    const indexofmaxspend = spend.findIndex(
        (item)=>item.amount === 
        Math.max(...spend.map((spend)=>spend.amount)))

  const[indexClicked,setIndexClicked]=useState(null)

   

    

  return (
    <div className="chart">
        <div className="days">
        {spend &&
      spend.map((n,index) => (
        <>
        
            <div className="spend" onClick={()=>(setIndexClicked(index))}  key={n.id}>
                
                
                <div >
                
                <div  className={`cost ${index === indexofmaxspend ? 'max':''} `} style={{height:`${(n.amount)*2.7}px`}} ></div>
                {indexClicked === index && <span className="amount" >${n.amount} </span>}
                </div>
                
                
                <p>{n.day}</p>
                
                

            </div>
        

        </>
      ))}
      </div>
      <div className="total">
        <div className="total-spend">
            <p>Total this month</p>
            <h2>$478.33</h2>
        </div>
        <div className="growth">
            <b>+2.4%</b>
            <p>from last month</p>
        </div>
      </div>

      
      
    </div>
  )
}

export default Chart