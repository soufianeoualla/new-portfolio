import check from './assets/icon-check.svg'
const Thanks = ({setisSelected}) => {
  return (
   <div className="thanks">
        <img src={check} alt="" />
        <div className="text">
            <h1>Thanks for your support!</h1>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
            Got it!</p>
        </div>
        <button onClick={()=>setisSelected(false)}>Got it!</button>

   </div>
  )
}

export default Thanks