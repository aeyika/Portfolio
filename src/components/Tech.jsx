import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react"

const Tech = () => {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0},
  }



  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}

      className="text-4xl font-light text-white md:text-6xl">Languages</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}} >
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 translation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}} >
          <BiLogoReact className="cursor-pointer text-[80px] text-cyan-500 translation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoDocker className="cursor-pointer text-[80px] text-blue-500 translation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 translation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 translation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-500 translation-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>
      </div>
    </div>
  )
}

export default Tech