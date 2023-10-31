import { useState } from "react"
import Avatar from "./Avatar"
import Hero from "./Hero"
import Share from "./Share"
import ShareBox from "./ShareBox"


const Container = () => {

    const [Isshowing,setIsshowing] = useState(false)

  return (
    <div className="container">
        <Hero/>
    
    <div className="text">
      <h1>Shift the overall look and feel by adding these wonderful 
        touches to furniture in your home</h1>
      <p>Ever been in a room and felt like something was missing? Perhaps 
        it felt slightly bare and uninviting. I’ve got some simple tips 
        to help you make any room feel complete.
      </p>
      <div className="avatar">
        <Avatar/>
        <Share setIsshowing= {setIsshowing} Isshowing= {Isshowing} />
      </div>
      {Isshowing && <ShareBox/>}
      
    </div>
  </div>
  )
}

export default Container