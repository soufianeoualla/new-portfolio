import icon_error from './assets/icon-error.svg'
const Error = ({errors}) => {
  return (
    <div className="error-message">
          <img src={icon_error} alt="" className="error-first-name"/>
          <p  id="txt-first-name">{errors} </p>
          
          </div>
  )
}

export default Error