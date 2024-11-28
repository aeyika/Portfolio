import { BsDiscord, BsGithub, BsTwitterX } from "react-icons/bs"
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen =() => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-16 py-6 text-white border-b border-b-gray-700 bg-black/70 backdrop-blur-md md:justify-evenly">
        <a href="#home" className="text-3xl font-semibold text-transparent duration-300 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 transtion-all hover-opacity-100">aeyika</a>
        
        <ul className="hidden gap-10 md:flex">

          <a href="#home" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Home</li>
          </a>

          <a href="#tech" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Tech</li>
          </a>

          <a href="#projects" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Projects</li>
          </a>

          <a href="#contact" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Contact</li>
          </a>
        </ul>

        <ul className="hidden gap-5 md:flex">
            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity--100">
            <BsDiscord />
            </li>



            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity--100">
            <BsGithub />
            </li>


            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity--100">
            <BsTwitterX />
            </li>
        </ul>
        
        {isOpen ? (
          <BiX className="block text-4xl md:hidden" onClick={menuOpen}/>
        ) : (
          <BiMenu className="block text-4xl md:hidden" onClick={menuOpen}/>
        )}


        {isOpen &&(
          <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-8">
            <a href="#home" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Home</li>
          </a>

          <a href="#tech" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Tech</li>
          </a>

          <a href="#projects" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Projects</li>
          </a>

          <a href="#contact" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Contact</li>
          </a>
            </ul>

            <ul className="flex flex-wrap gap-5">
            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity--100">
            <BsDiscord />
            </li>



            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity--100">
            <BsGithub />
            </li>


            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity--100">
            <BsTwitterX />
            </li>
        </ul>
          </div>
        )}

    </nav>
  )
}

export default Navbar