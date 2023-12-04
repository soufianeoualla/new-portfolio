
const BlackEditionStand = ({setisSelected}) => {
  return (
    <section className="blackEditionStand">
        <div className="wrapper">
            <div className="text">
            <div className="title">
                        <h2> Black Edition Stand</h2>
                        <span>Pledge $75 or more</span>
                    </div>
                    <p>
                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                        member list. Shipping is included.
                    </p>

                    <div className="select-reward">
                        <div className="left">
                            <h2>64</h2>
                            <p>left</p>
                        </div>
                        <button className="reward" onClick={()=>setisSelected(true)}>Select Reward</button>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default BlackEditionStand