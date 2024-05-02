import { motion } from "framer-motion";
import { RiRadioButtonLine } from "react-icons/ri";
import img from './assets/img.png';
import hero_img from './assets/img.svg'
const About = () => {
  return (
    <section className=' my-20 flex justify-between gap-10 items-center relative md:grid'>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className='flex items-center gap-2 text-xs '>
          <div className=' w-10 h-10 rounded-full bg-green bg-opacity-25'>
            <img  width={"40px"} src={img} alt='' />
          </div>
          <div className='py-1 px-3 bg-gray rounded-xl flex items-center gap-2'>
            <motion.div
             animate={{
              scale: [1, 1.5],
              
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              
              repeat: Infinity,
              repeatDelay: 0.3
            }} >
            <RiRadioButtonLine className='text-green' />
            </motion.div>
            Looking for internship
          </div>
        </div>
        <h1 className='text-7xl font-bold text-white z-10 '>
          Nice to meet you! <br />
          I&apos;m Soufiane.
        </h1>
        <p className='text-white text-opacity-70 w-3/5 mt-5 mb-10 font-medium'>
          Based in Morocco,I&apos;m a <span className=" text-green font-bold">front-end developer</span> passionate about
          building accessible web apps.
        </p>

        <a href="#contact" className='text-white  uppercase font-bold tracking-wide border-b-2 py-3  border-b-green hover:text-green '>
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className='about-img w-1/3 flex justify-center items-center absolute right-0 md:hidden  '
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <img
        className="z-0" width={"70%"} src={hero_img} alt='' />
      </motion.div>
    </section>
  );
};

export default About;
