
const CardJourney = ({p,number,img,icons}) => {
  return (
    <div className="card">
        <div>
            {img}
        </div>
        <div className="icons">
        {icons}
        {icons}
        {icons}
        {icons}
        {icons}
        </div>
        
        <p>{p} </p>
        <h1>{number} </h1>
        

        
    </div>
  )
}

export default CardJourney