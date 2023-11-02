import { useFormik } from 'formik';
import Banner from "./Banner"
import Error from "./Error"
import SubmitButton from "./SubmitButton"

const Form = () => {

  
  const validate = (values, props ) => {
    const errors = {};
  

    if (values.firstName==='')  errors.firstName = 'First Name cannot be empty';

    if (values.lastName==='')  errors.lastName = 'Last Name cannot be empty';


    if (!values.email) {
      errors.email = 'email cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Looks like this is not an email';
    }
    
    if (!values.password)  errors.password = 'Password cannot be empty';


  
  
    return errors;
  };
  


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert('Your information has been submitted');
    },
  });


  return (
    <div className="form">
      <Banner/>
      <form onSubmit={formik.handleSubmit} >
        <div className="first-name">
          <input  type="text"  id="firstName" placeholder="First Name " className="input" onChange={formik.handleChange}
         value={formik.values.firstName}  />
         {formik.errors.firstName ? <Error errors ={formik.errors.firstName} />: null}
          
        </div>
        <div  className="last-name">
          <input type="text"  id="lastName"  placeholder="Last Name "  className="input"  onChange={formik.handleChange}
         value={formik.values.lastName} />
           {formik.errors.lastName ? <Error errors ={formik.errors.lastName} />: null}
        </div>
        <div className="email">
          <input type="email" id="email"  placeholder="Email Address" className="input"   onChange={formik.handleChange}
         value={formik.values.email}/>
           {formik.errors.email ? <Error errors ={formik.errors.email} />: null}
        </div>

        <div className="password">
          <input type="password"  id="password" placeholder="Password" className="input"  onChange={formik.handleChange}
         value={formik.values.password} />
           {formik.errors.password ? <Error errors ={formik.errors.password} />: null}
        </div>
        <SubmitButton/>
      </form>
      </div>
  )
}

export default Form