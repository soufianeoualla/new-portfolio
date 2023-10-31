
const Share = ({Isshowing,setIsshowing}) => {
  return (
    <i className="fa-solid fa-share" id="share-btn"onClick={()=>setIsshowing(!Isshowing)}></i>
  )
}

export default Share