import React from "react";
import { motion } from "framer-motion";

export default function Header({ isLoaded }) {
  return (
    <header className="px-6 mt-1 bg-gradient-to-b from-gray-900 via-black to-black py-10 relative">
      {/* Optional Background Effect */}
      <div className="absolute inset-0">
        {/* Example: Add particle animation or shapes */}
        <div className="bg-gradient-radial from-blue-500 via-transparent to-black opacity-20 w-full h-full"></div>
      </div>

      {/* Main Heading */}
      <h1 className="relative font-extrabold flex items-center md:justify-center z-10">
        {/* Desktop View */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="block text-white text-4xl sm:text-4xl md:text-5xl font-extrabold"
          aria-label="Main Greeting"
        >
          {/* For smaller screens, show the full name with breaks */}
          <span className="md:whitespace-nowrap">
            Hello, I’m{" "}
            <span className="block sm:inline bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
              Raunak Kaushal
            </span>
          </span>
        </motion.span>
      </h1>

      {/* Job Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative md:text-center text-lg sm:text-xl md:text-2xl mt-4 text-gray-300 z-10"
        aria-label="Job Title"
      >
        A passionate{" "}
        <span className="font-semibold text-teal-400">
          Full Stack Developer
        </span>
        .
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="relative md:text-center text-gray-400 mt-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto z-10"
        aria-label="Description"
      >
        MERN stack developer focused on building scalable web apps with seamless
        user experiences and efficient solutions.
      </motion.p>
    </header>
  );
}
