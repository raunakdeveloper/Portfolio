import React from "react";
import { motion } from "framer-motion";

export default function Header({ isLoaded }) {
  return (
    <header className="text-center px-6 mt-2 bg-black py-8">
      {/* Main Heading */}
      <h1 className="font-extrabold flex items-center justify-center">
        {/* Desktop View */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="block text-white text-3xl sm:text-4xl md:text-5xl font-extrabold"
          aria-label="Main Greeting"
        >
          {/* For smaller screens, show the full name with breaks */}
          <span className="md:whitespace-nowrap">
            Hello, I’m{" "}
            <span className="block sm:inline text-[#FF0B0B]">
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
        className="text-lg sm:text-xl md:text-2xl mt-4 text-white"
        aria-label="Job Title"
      >
        A passionate{" "}
        <span className="text-[#FF0B0B] font-semibold">
          Full Stack Developer
        </span>
        .
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        aria-label="Description"
      >
        MERN stack developer focused on building scalable web apps with seamless
        user experiences and efficient solutions.
      </motion.p>
    </header>
  );
}
