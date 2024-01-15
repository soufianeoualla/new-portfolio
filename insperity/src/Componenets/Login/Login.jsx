import logo from '../assets/logo.svg'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="wrapper">
            <div className="login">
                <div className="back">
                    <Link to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                         Go back
                    </Link>
                
                </div>
        <img src={logo} alt="" />
        <form action="">
            <label htmlFor="Username">
                <strong>Username:</strong>
                <input type="text" name="username" id="Username"/>
            </label>
            <label htmlFor="Password">
                <strong>Password:</strong>
                <input type="password" name="password" id="Password" />
            </label>
            <button className="secondary-btn">
                LOG IN
            </button>
        </form>
    </div>
    </div>
    
  )
}

export default Login