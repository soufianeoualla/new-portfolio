import { useFormik } from 'formik';
import  { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Thankyou from './Thankyou';
import { motion, useAnimation, useInView } from "framer-motion";
const Contact = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
        console.log(isInView);
      }
    }, [isInView, mainControls]);


    const form = useRef();
    const [thankyou,setThankyou]=useState(false)


  const sendEmail = async () => {
    try {
      await emailjs.sendForm('service_jsumuec','template_2lkxz3y', form.current, '2oeWgya5j2EmOAAtY');
      
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const validate = values => {
    const errors = {};


      if (!values.user_name) {
        errors.user_name = 'Required';
      } 
    
      if (!values.message) {
        errors.message = 'Required';
      } 
    
      if (!values.user_email) {
        errors.user_email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
        errors.user_email = 'Invalid email address';
      }
    
      return errors;
    

   

   
  };
  const formik = useFormik({
    initialValues: {
      user_email: '',
      user_name:'',
      message: '',
    },
    validate,
    onSubmit:(values) => {
        setThankyou(true)
      sendEmail(values);
    },
   
  });

  return (
    <div id='contact' className='bg-gray' >

    <section ref={ref}>
        <motion.div className='  '
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}>
      <div className='container mx-auto p-20 flex md:grid sm:p-10'>
        <div >
          <h1 className='text-4xl font-bold tracking-wide'>
            Contact
          </h1>
          <p className='w-3/5 my-4 text-opacity-65 text-white sm:w-full'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
          <a className='text-bold hover:text-green' href="mailto:contact@soufian.me">contact@soufian.me</a>
        </div>

        {!thankyou && <form
        ref={form} className='grid  w-1/2 gap-2' action=' '>
          <input
            className={`border-b-2 border-b-white py-4 px-2 bg-transparent outline-none focus:border-b-green border-opacity-60 ${formik.errors.user_name && 'border-b-red'}`}
            type='text'
            name='user_name'
            id=''
            placeholder='NAME'
            value={formik.values.user_name}
            onChange={formik.handleChange}
          />
          {formik.errors.user_name && <p className='error text-red text-xs mt-1'>{formik.errors.user_name} </p> }
          <input
            className={`border-b-2 border-b-white py-4 px-2 bg-transparent outline-none focus:border-b-green border-opacity-60 ${formik.errors.user_email && 'border-b-red'}`}
            type='email'
            name='user_email'
            id=''
            placeholder='EMAIL'
            value={formik.values.user_email}
            onChange={formik.handleChange}
          />
          {formik.errors.user_email && <p className='error text-red text-xs mt-1'>{formik.errors.user_email} </p> }
          <textarea
            className={`border-b-2 border-b-white border-opacity-60 py-4 px-2 bg-transparent resize-none outline-none focus:border-b-green ${formik.errors.message && 'border-b-red '} `}
            name='message'
            id=''
            style={{height: '148px'}}
            placeholder='MESSAGE'
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.message && <p className='error text-red text-xs mt-1'>{formik.errors.message} </p>}

          <button onClick={formik.handleSubmit}
           className=' pb-2 mt-10 w-32 text-left border-b-green border-b-2 hover:text-green'>
            SEND MESSAGE
          </button>
        </form>}
        { thankyou && <Thankyou/>}
      </div>
      
    </motion.div>

    </section>
    </div>
    
  );
};

export default Contact;
