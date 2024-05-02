import { FaReact } from "react-icons/fa";
import { FaNodeJs, FaHtml5,FaCss3  } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const Technologies = () => {
  const tech = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
  ];
  

  return (
    <>
    
    <motion.div className="py-10"
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate='visible'
    transition={{ duration: 0.5, delay: 0.25 }} >
        <hr className=" text-opacity-90 text-white"/>
        <h2 className="text-3xl font-bold mt-10">Technologies</h2>
        <div className="grid grid-cols-3 w-4/5 place-content-center items-center gap-2 mx-auto my-10 md:grid-cols-2 sm:w-full">
            {tech.map((n)=>(
                <div className="flex flex-col justify-center items-center gap-3  bg-gray rounded-2xl p-10  hover:bg-opacity-35 cursor-pointer" key={n}>
                    <span className="text-4xl">{n.icon} </span>
                    <span>{n.name} </span>

                </div>
            ))}
        </div>
    </motion.div>
    
    </>
  )
}

export default Technologies