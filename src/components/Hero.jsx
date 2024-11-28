import profile from "/public/profilepic.jpg"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-center w-full min-h-screen px-16 py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.2, delay: 0.1}}

        >
          <img src={profile} alt="Profile Picture" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"/>
        </motion.div>

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.2, delay: 0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-5xl font-light text-transparent duration-300 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 md:text-7xl">Hey! Im aeyika</h1>
          <h3 className="text-2xl text-transparent duration-300 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text opacity-80 md:text-3xl">Full-stack Web Developer & Designer</h3>
          <p className="text-sm text-gray-400 md:text-base text-pretty">
            I am a Full-stack web developer skilled in React, Next.js, and Tailwind CSS. I am focused on producing clean, responsive applications. From front-end design to seamless intergration with PostgreSQL, I create efficient solutions for dynamic user experiences.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero