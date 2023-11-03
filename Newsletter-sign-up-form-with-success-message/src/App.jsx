import { useState } from 'react'
import { useFormik } from "formik";
import Hero from "./Components/Hero"
import List from "./Components/List"

import './App.css'
import SuccesMessage from './Components/SuccesMessage'

function App() {

  const [Isshowing,setIsshowing] = useState(false)
  const validate = (values, props ) => {
    const errors = {};


    if (!values.email) {
      errors.email = 'email cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Valid email required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
 
    },
    validate,
    onSubmit: values => {
      setIsshowing(!Isshowing);
      
    },
  });
  

 
    
  return (
    <>
       {!Isshowing && <div className="container">
        <div className="wrapper">
            <h1>Stay updated!  </h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <List/>
            
            <form className="form" onSubmit={formik.handleSubmit}>
            <div className="input">
          <div className="txt">
          <small>Email address</small>
          {formik.errors.email ? <small className="error-txt">{formik.errors.email}</small>: null}
          
          </div>
            
            <input type="email" name="email" id="email" placeholder="email@company.com"  onChange={formik.handleChange}
            value={formik.values.email}  className={`${formik.errors.email && "input-error" } `}/>
        </div>
        <button  type="submit"> Subscribe to monthly newsletter </button>
      </form>
        </div>
        <Hero/>
        </div>}

      {Isshowing && <SuccesMessage Isshowing= {Isshowing}  setIsshowing={setIsshowing} email = {formik.values.email} />}
      
    </>
  )
}

export default App
