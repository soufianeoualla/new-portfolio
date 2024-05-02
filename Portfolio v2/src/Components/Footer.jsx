import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView);
    }
  }, [isInView, mainControls]);
  return (
    <footer className=' bg-gray'>
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.25 }}
          className='container mx-auto px-20 py-10 sm:p-10 '
        >
          <hr className='text-white text-opacity-90' />
          <div className='flex mt-3 justify-between items-center sm:flex-col sm:gap-4 '>
            <h1 className='text-2xl font-bold tracking-wide'>SoufianeDev</h1>

            <div className='flex gap-8 text-white'>
              <a
                className=' hover:text-green text-2xl'
                target='_blank'
                href='https://github.com/soufianeoualla?tab=overview&from=2024-02-01&to=2024-02-12'
              >
                <FaGithub />{" "}
              </a>
              <a
                className=' hover:text-green text-2xl'
                target='_blank'
                href='https://www.linkedin.com/in/soufianeoualla/'
              >
                <FaLinkedin />{" "}
              </a>
              <a
                className=' hover:text-green text-2xl'
                target='_blank'
                href='mailto:contact@soufian.me'
              >
                <FaEnvelope />{" "}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
