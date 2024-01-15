
const ServiceItem = ({name,icon}) => {
  return (
    <>
     <div className="item">
        {icon}
        <b>{name}</b>
    </div>
    
    </>
   

  )
}

export default ServiceItem