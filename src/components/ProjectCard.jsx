import React from 'react';

export default function ProjectCard({ project, isActive }) {
  return (
    <div className={`rounded-xl select-none overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
      isActive ? 'scale-100' : 'scale-90'
    }`}>
      <div className="h-64">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
}

