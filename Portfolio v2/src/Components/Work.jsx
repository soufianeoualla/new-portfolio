
import { useState } from 'react'
import ProjectCard from './ProjectCard'

const Work = () => {
    const[viewAll,setViewAll]=useState(false)
  
  return (
    <section className="py-10">
                <hr className=" text-opacity-90 text-white"/>
        <h2 className="text-3xl font-bold mt-10 ">Work</h2>
         
        <ProjectCard viewAll={viewAll} />
        <div className='flex justify-center items-center'>
        <button onClick={()=>setViewAll(!viewAll)}
        className='pb-1 border-b-green border-b-2 hover:text-green mt-20 mx-auto'>{viewAll ? 'View Less':'View All'}</button>
        </div>

    </section>
  )
}

export default Work