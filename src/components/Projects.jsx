import { motion } from "motion/react";
import image from "/public/image.png";
import image1 from "/public/image1.png";
import image3 from "/public/image3.png";

const projectsData = [
  {
    image: image,
    title: "Weather App",
    description: "A simple weather app that displays the weather by contacting an API.",
    tech: ["React", "Tailwind", "Typescript"]
  },

  {
    image: image1,
    title: "Web Proxy",
    description: "A Powerful Web Proxy that can search for anything.",
    tech: ["React", "Tailwind", "Typescript"]
  },
  {
    image: image3,
    title: "Background Generator",
    description: "A background gradient generator for Tailwind CSS",
    tech: ["React", "Tailwind", "Typescript"]
  }
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >

      {children}
    </motion.div>
  )
}


const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration:300 hover:scale-105 md:w-[300px]" />
      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-5">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-5">
        {
          project.tech.map((tech, index) =>(
            <span key={index} className="p-3 bg-black rounded-lg">
              {tech}
            </span>
          ))
        }

      </div>


      </div>
    </div>
    </ScrollReveal>
  )
}



const Projects = () => {
  return(
  
    <div id="projects" className="flex flex-col items-center justify-center w-full min-h-screen gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
    <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
    </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  ) 
}



export default Projects
