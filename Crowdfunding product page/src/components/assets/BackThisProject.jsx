import { useState } from "react"
import close_modal from './icon-close-modal.svg'

const BackThisProject = ({setIsBackBtnClicked,setisSelected}) => {

  const [data,setData]=useState([
    {
      title: 'Pledge with no reward',
      decription:' Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      pledge: '',
     
    },

    {
      title: 'Bamboo Stand',
      decription:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      pledge: 'Pledge $25 or more',
      left: '101 '
    },

    {
      title: 'Black Edition Stand',
      decription:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      pledge: 'Pledge $75 or more',
      left: '64 '
    },

    {
      title: 'Mahogany Special Edition ',
      decription:' Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      pledge: 'Pledge $200 or more ',
      left: '0 '
    },
  ])

  const[indexSelected,setIndexSelected]=useState(null)

  const[values,setvalues]=useState({
    bamboo: '25',
    balckEdition: '75'
  })

  const handleContinueButton = ()=>{
    
      setisSelected(true)
      setIsBackBtnClicked(false)
    
    }
   

  return (
    <div className="backthisproject">
        <div className="text">
            <div className="title">
            <h1>  Back this project</h1>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </div>
            
            <img onClick={()=>setIsBackBtnClicked(false)}
            src={close_modal} alt="" className="close-modal"/>
        </div>
          {data && data.map((n,index)=>(
              <div onClick={()=>setIndexSelected(index)}
              key={n.title} className={`wrapper ${((indexSelected===index && n.left !='0 ')) && 'selected-pledge'}`}
                   style={{opacity : n.left === '0 '? 0.2: 1}}>
                     { ((indexSelected===index && n.left !='0 ')) && <div className="option">
                     <i className="bi bi-circle-fill"></i>
                     </div>}
                
                <div className="text" >
                  <div className="top">
                    
                    
                    <h3>{n.title} <span className="pledge">{n.pledge} </span></h3>
                  
                  
                    <p className="left-desktop"><b>{n.left} </b> {n.left? 'left ': ''} </p>
                  </div>
                  <p>{n.decription} </p>
                 
                </div>
                <p className="left-mobile"><b>{n.left} </b> {n.left? 'left ': ''} </p>
                { (indexSelected===index && n.left > 0)&& <div className="cta">
                  <p>Enter your pledge</p>
                  <div className="continue">
                    <div className="input">
                      {n.title=== 'Bamboo Stand' && <input type="number" value={values.bamboo}
                      onChange={(e)=>setvalues((prev=>({...prev, bamboo: e.target.value})))} />}

                      { n.title === 'Black Edition Stand'&& <input type="number" value={values.balckEdition}
                      onChange={(e)=>setvalues((prev=>({...prev, balckEdition: e.target.value})))} />}
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <button onClick={handleContinueButton}>continue</button>
                  </div>
                </div>}

                {indexSelected ===index && n.pledge ===''&& 
                  <div className="continue  nopledge">
                        <button 
                 onClick={handleContinueButton}>continue</button>
                  </div>
                }

            </div>
          )
          )}
            
    </div>
  )
}

export default BackThisProject