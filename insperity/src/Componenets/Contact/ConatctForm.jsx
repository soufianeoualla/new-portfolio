import person_img from '../assets/contact-sale-person.jpg'
import { useFormik } from 'formik';
import './Contact.css'
import axios from 'axios';

const ConatctForm = ({setContactClicked,setThankYou}) => {


    const validate = values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (!/^[a-z ,.'-]+$/i.test(values.firstName) ) {
          errors.firstName = 'Must be a valid name';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (!/^[a-z ,.'-]+$/i.test(values.lastName)) {
          errors.lastName = 'Must be a valid name';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if(!values.phone){
            errors.phone ='Requried'
        }else if (!(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        .test(values.phone)) )
            errors.phone = 'Must be a valid phone number'
        
        if(!values.company){
            errors.company='Requried'
        }
        
      
        return errors;
      };

      

    const formik = useFormik({
        initialValues: {
          email: '',
          firstName:'',
          lastName:'',
          phone:'',
          company:''
        },
        validate,
        onSubmit: values => {

          const data ={
            email:formik.values.email,
            firstName : formik.values.firstName,
            lastName : formik.values.lastName,
            phone: formik.values.phone,
            company : formik.values.company
    
          }
          axios.post('https://sheet.best/api/sheets/e0dab530-a95a-4e49-8515-8aa46eb66fe5',data).then((response)=>{console.log(response)})

            setThankYou(true)
            setContactClicked(false)


        },
      });

      

     
  return (
    <div className="contact-form">
        <i onClick={()=>setContactClicked(false)}
        className="fa-solid fa-x"></i>
        <h1>Learn how Insperity can help your <span>business</span></h1>
        <div className="agent">
            <div className="avatar">
                <img src={person_img} alt="" />
            </div>
            <div className="details">
                <strong>Call us</strong>
                <span><a href="tel:+844.625.1266">844.625.1266</a></span>
                <strong>Or have us contact you</strong>
                <p>Fill out the form and one of our representatives will contact you within one business day.</p>
            </div>
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="email">

                <input type="email" 
                placeholder="Email" 
                name='email' 
                value={formik.values.email}
                onChange={formik.handleChange}/>
                {formik.errors.email? <div className='error'>{formik.errors.email} </div> : null}

            </div>
            <div className="name">

                <div className="first-name">

                    <input type="text" 
                    placeholder="First Name" 
                    name='firstName'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}/>
                    {formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}

                </div>
                <div className="last-name">
                    <input type="text" 
                    placeholder="Last Name" 
                    name='lastName'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}/>
                    {formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}

                </div>
            </div>
            <div className="contact-ways">
                <div className="phone">
                    <input type="tel" 
                    name="phone" 
                    placeholder="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}/>
                    {formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                </div>
                <div className="company">
                    <input type="text" 
                    placeholder="Company Name"
                    name='company'
                    value={formik.values.company}
                    onChange={formik.handleChange}/>
                    {formik.errors.company ? <div className='error'>{formik.errors.company}</div > : null}
                </div>
            </div>
            <button 
            className='secondary-btn'>Let&apos;s Talk </button>
        </form>

       
        
    </div>
  )
}

export default ConatctForm