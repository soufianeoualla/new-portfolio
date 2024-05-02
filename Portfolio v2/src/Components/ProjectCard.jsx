import insperity from "./assets/insperity.png";
import ecommerce from "./assets/E-commerce.jpg";
import Rental from "./assets/Rental.png";
import shortenLinks from "./assets/shortenLinks.jpg";
import sofi from "./assets/sofi.jpg";
import multi from './assets/multi.jpg'
import audiophile from './assets/audiophile.webp'
import kanban from './assets/kanban.webp'

import { useState } from "react";

const ProjectCard = ({ viewAll }) => {
  const projects = [
    {
      id: 1,
      project: "Audiophile e-commerce website " ,
      link: {
        href: "https://e-commerce-audiophile.vercel.app/",
        github: "https://github.com/soufianeoualla/e-commerce-audiophile",
        src: audiophile,
      },
      tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Redux"],
    },
  
    {
      id: 2,
      project: "Kanban Task Management Web App",
      link: {
        href: "https://kanban-theta-eight.vercel.app/",
        github: "https://github.com/soufianeoualla/kanban",
        src: kanban,
      },
      tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Redux"],
    },
    {
      id: 3,
      project: "E-commerce product page .",
      link: {
        href: "https://e-commerce-product-page-cyan.vercel.app/",
        github: "https://github.com/soufianeoualla/E-commerce-product-page",
        src: ecommerce,
      },
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 4,
      project: "Multi-step form      ",
      link: {
        href: "https://multi-steps-form-seven.vercel.app/",
        github:
          "https://github.com/soufianeoualla/multi-steps-form",
        src: multi,
      },
      tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Redux"],
    },

  
    {
      id: 5,
      project: "Sofi - E-commerce Furniture Store ",
      link: {
        href: "https://sofi-ecommerce.vercel.app/",
        github: "https://github.com/soufianeoualla/sofi-website",
        src: sofi,
      },
      tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"],
    },
    {
      id: 6,
      project: "URL shortening landing page  ",
      link: {
        href: "https://url-shortening-api-landing-page-mthr.vercel.app/",
        github:
          "https://github.com/soufianeoualla/URL-shortening-API-landing-page-",
        src: shortenLinks,
      },
      tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      id: 7,
      project: "Insperity Website",
      link: {
        href: "https://insperity.vercel.app/",
        github:
          "https://github.com/soufianeoualla/insperity/tree/main/insperity",
        src: insperity,
      },
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 8,
      project: "StarCar Rental Car Web App",
      link: {
        href: "https://rental-car-web-app.vercel.app/",
        github: "https://github.com/soufianeoualla/rental-car-web-app",
        src: Rental,
      },
      tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
  ];

  const [hover, setHover] = useState(null);

  const project = viewAll ? projects : projects.slice(0, 4);

  return (
    <div className='grid grid-cols-2  gap-10 my-10 px-10 md:grid-cols-1 sm:px-5'>
      {project.map((n, index) => (
        <div
          className={`rounded-t-xl flex flex-col justify-between  ${
            index % 2 === 1 && "relative top-20 md:top-0"
          }`}
          key={n.id}
        >
          <div className='text-sm '>
            <div
              onMouseOver={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className={`relative ${
                hover === index &&
                "before:absolute before:inset-0 before:bg-black before:bg-opacity-70  "
              }  `}
            >
              <div className='project-img '>
                <img className='rounded-lg' src={n.link.src} alt='' />
              </div>

              <div
                className={`project-cta  flex-col absolute top-1/2 left-1/2  items-center gap-8 uppercase font-bold tracking-wide ${
                  hover === index ? "flex" : "hidden"
                } `}
              >
                <a
                  className='pb-1 px-1 border-b-2 border-green text-lg hover:text-green'
                  href={n.link.href}
                >
                  Live Demo
                </a>
                <a
                  className='pb-1 px-1 border-b-2 border-green text-lg hover:text-green'
                  href={n.link.github}
                >
                  View Code
                </a>
              </div>
            </div>

            <h1 className='mt-4 uppercase  font-bold text-2xl'>{n.project}</h1>
            <div className='flex flex-wrap gap-2 py-3 mb-10 uppercase'>
              {n.tags.map((tag) => (
                <span key={tag} className='text-white text-opacity-90'>
                  {tag}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
