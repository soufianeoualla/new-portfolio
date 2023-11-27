import { useFormik } from 'formik';
import { useState } from 'react';


const Contact = ({contact,setContact}) => {

  const validate = values => {
    const errors = {};


      if (!values.fullname) {
        errors.fullname = 'Required';
      } 
      if (!values.subject) {
        errors.subject = 'Required';
      } 

      if (!values.subject) {
        errors.subject = 'Required';
      } 
      if (!values.message) {
        errors.message = 'Required';
      } 
    
   
    
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    
      return errors;
    

   

   
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      fullname:'',
      subject:'',
      message: '',
    },
    validate,
    onSubmit: values => {
      setIsShowing(true)
    },
  });

  const [isShowing,setIsShowing]=useState(false)

  

  return (

    <section  className="contact-page">
      <i onClick={()=>setContact(false)}
       className="bi bi-x-lg" id="close-icon"></i>
      {!isShowing &&<h1>Contact</h1>}
       {!isShowing && <form  onSubmit={formik.handleSubmit}
        className="form">
          <div className="input">
            <input type="text" name="fullname" placeholder="FullName" value={formik.values.fullname} onChange={formik.handleChange}/>
            {formik.errors.fullname && <p className='error'>{formik.errors.fullname} </p> }
          </div>
        
          <div className="input">
          <input type="Email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.fullname && <p className='error'>{formik.errors.fullname} </p> }
          </div>
          
          <div className="input">
            <input type="text" name="subject" placeholder="Subject" value={formik.values.subject} onChange={formik.handleChange}  />
            {formik.errors.subject && <p className='error'>{formik.errors.subject} </p>}
          </div>
          
            <div className="input">
            <textarea name="message"  id="textarea" cols="30" rows="10" placeholder="Message" value={formik.values.message} 
            onChange={formik.handleChange} ></textarea>
            {formik.errors.message && <p className='error'>{formik.errors.message} </p>}
            </div>
          
            
          <button  >SUBMIT</button>
    </form>}
      { isShowing && <div className="thankyou">
          <h1>Thank You</h1>
          <i className="bi bi-check-circle-fill"></i>
          <p>your message has been sent successfully</p>
      </div>
  }
    </section>
  )
}

export default Contact