
import icon_success from './assets/icon-success.svg'
const SuccesMessage = ({Isshowing,setIsshowing,email}) => {

    const handlereset = ()=>{
        setIsshowing(!Isshowing)
      }
  return (
    <>
    <div className="success">
        <img src={icon_success} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <em    className='email'>{email} </em>
            Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={handlereset} type="reset">Dismiss message</button>
    </div>
   
    </>
  )
}

export default SuccesMessage