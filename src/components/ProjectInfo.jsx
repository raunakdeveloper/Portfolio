import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectInfo({ project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-1 text-center"
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text text-white mb-2">{project.title}</h2>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex justify-center space-x-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-colors duration-300"
        >
          <Github size={20} className="mr-2" />
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 transition-colors duration-300"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}
