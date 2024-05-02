import { motion } from "framer-motion";
import { FaGithub,FaLinkedin,FaEnvelope   } from "react-icons/fa";
const Header = () => {
  
  return (
    <header className=''>
      <motion.div className="flex justify-between items-center"
      variants={{
        hidden :{opacity:0,y:-75},
        visible:{opacity:1, y:0}
      }}
      initial='hidden'
      animate="visible"
      transition={{duration : 0.5, delay: 0.25}}
      >
      <h1 className='text-2xl font-bold text-white'>SoufianeDev</h1>
      <nav className='flex gap-8 text-white'>
        <a className=" hover:text-green text-2xl" target="_blank" href='https://github.com/soufianeoualla?tab=overview&from=2024-02-01&to=2024-02-12'><FaGithub/> </a>
        <a className=" hover:text-green text-2xl" target="_blank" href='https://www.linkedin.com/in/soufianeoualla/'><FaLinkedin/> </a>
        <a className=" hover:text-green text-2xl" target="_blank" href='mailto:contact@soufian.me'><FaEnvelope/> </a>
      </nav>

      </motion.div>
    </header>
  );
};

export default Header;
