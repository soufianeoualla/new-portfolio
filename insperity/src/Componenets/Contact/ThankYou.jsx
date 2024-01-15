import { useFormik } from 'formik';
import './Contact.css'

const ThankYou = ({setThankYou}) => {

   
 const validate = values => {
  const errors = {};

  if (!values.textarea) {
    errors.textarea = 'Required';
 
  return errors;
}};
 

  const formik = useFormik({
    initialValues: {
      textarea: ''
      
    },
    validate,
    onSubmit: values => {
      setThankYou(false)
      
    },
  });

  return (
    <div className="thankyou">
    <i onClick={()=>setThankYou(false)}
    className="fa-solid fa-x"></i>
        <h1>Thank you for submitting your request to <span>Insperity</span>.</h1>
        <h3>Someone will be contacting you within the next business day.</h3>
        <p>If you need immediate assistance, please contact us by phone at <a href="tel:+855.449.1805">855.449.1805</a> during the hours of 7:00 a.m. to 6:00 p.m. CT, Monday through Friday.</p>

        <form action="" onSubmit={formik.handleSubmit}>
        <textarea 
        name="textarea" 
        id="" cols="30" 
        rows="10" 
        placeholder="How did you hear about us"
        value={formik.values.textarea}
        onChange={formik.handleChange}
        >
          
        </textarea>
        {formik.errors.textarea ? <div className='error'>{formik.errors.textarea} </div> : null}

        <button className='secondary-btn'>Submit</button>


        </form>

        

    </div>
  )
}

export default ThankYou