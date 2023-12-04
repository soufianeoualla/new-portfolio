
const BambooStand = ({setisSelected}) => {
  return (
    <section className="BambooStand">
            <div className="wrapper">
                <div className="text">
                    <div className="title">
                        <h2>Bamboo Stand</h2>
                        <span>Pledge $25 or more</span>
                    </div>
                    <p>
                    You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                    </p>

                    <div className="select-reward">
                        <div className="left">
                            <h2>101</h2>
                            <p>left</p>
                        </div>
                        <button className="reward" onClick={()=>setisSelected(true)}>Select Reward</button>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default BambooStand