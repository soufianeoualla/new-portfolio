import logo from './assets/images/logo.svg'
const Balance = () => {
  return (
    <div className="balance">
        <div className="text">
            <p>My balance</p>
            <b>$921.48</b>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Balance