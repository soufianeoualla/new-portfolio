import { useState } from "react"

const BackedAmount = () => {
    const[data,setData]=useState(
        {
            amountNumber: '89914'  ,
            amount: '89,914',
            total : '100,000 ',
            totalBackers: "5,007 ",
            daysLeft: '56 '
        }
    )
  return (
    <section className="backed-amount">
        <div className="card-wrapper backed-card">

        
        <div className="numbers">
            <div className="backed-item">
                    <h1>${data.amount} </h1>
                    <p>of ${data.total} backed </p>
                </div>
                <div className="backed-item">
                    <h1>{data.totalBackers} </h1>
                    <p>total backers</p>
                </div>
                <div className="backed-item">
                    <h1>{data.daysLeft} </h1>
                    <p>days left</p>
            </div>
        </div>
            <div className="bar-percentage">
                <div className="bar">
                    <div className= 'percentage'
                    style={{width:`${data.amountNumber / 100000 *100}%`}} >

                    </div>
                </div>
            </div>
            
            </div>
    </section>
  )
}

export default BackedAmount