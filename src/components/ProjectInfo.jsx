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
      className="mt-8 text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex justify-center space-x-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#1F1F1F] text-white px-6 py-3 rounded-full hover:bg-[#FF0B0B] transition-colors duration-300"
        >
          <Github size={20} className="mr-2" />
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#1F1F1F] text-white px-6 py-3 rounded-full hover:bg-[#FF0B0B] transition-colors duration-300"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}