
const Contact = () => {
  return (
    <div id="#contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-5xl text-center md:text-7xl">
          <span className="text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text">Get In Touch</span>
        </h1>

        <p className="text-lg font-semibold text-center text-gray-500">
          Want to chat? Send me a Discord DM through this button.
        </p>

        <a href="https://discord.com/users/749197593850150992" className="px-5 py-3 text-lg font-bold text-white transition-all duration-300 bg-black border border-indigo-600 rounded-lg shadow-lg text-nowrap shadow-indigo-700 hover:-translate-y-2 hover:shadow-xl hover:shadwo-indigo-600">Contact Me</a>
        <p className="text-lg font-semibold text-center text-gray-500">
          Or Add Me : aeyika
        </p>
      </div>

    </div>
  )
}

export default Contact