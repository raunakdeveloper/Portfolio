import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioContext } from '../../context/PortfolioContext';
import Header from '../Header';
import ProjectCard from '../ProjectCard';
import ProjectInfo from '../ProjectInfo';
import Footer from '../Footer';

export default function Portfolio() {
  const { projects, selectedCard, isLoaded, prevCard, nextCard, currentProject } = useContext(PortfolioContext);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; // Minimum distance to trigger a swipe
    if (info.offset.x > swipeThreshold) {
      // Swiped right
      prevCard();
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left
      nextCard();
    }
  };

  return (
    <div className="flex flex-col select-none h-screen overflow-auto bg-black text-white font-sans">
      <Header isLoaded={isLoaded} />

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-6xl">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              className="hidden md:block absolute top-[32%] left-4 z-50 transform -translate-y-1/2 bg-white text-black p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
              onClick={prevCard}
              aria-label="Previous project"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="hidden md:block absolute top-[32%] right-4 z-50 transform -translate-y-1/2 bg-white text-black p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
              onClick={nextCard}
              aria-label="Next project"
            >
              <ChevronRight size={28} />
            </button>

            {/* Carousel */}
            <div className="flex justify-center h-[270px] relative overflow-hidden">
              <AnimatePresence initial={false}>
                {projects.map((project, index) => {
                  // Calculate offset relative to the selectedCard
                  const offset = (index - selectedCard + projects.length) % projects.length;

                  // Determine animation and positioning
                  const isActive = offset === 0;
                  const xPosition =
                    offset === 0
                      ? 0 // Center
                      : offset === 1 || offset === -projects.length + 1
                      ? 200 // Right
                      : offset === projects.length - 1 || offset === -1
                      ? -200 // Left
                      : -1000; // Offscreen

                  return (
                    <motion.div
                      key={project.id}
                      className={`absolute select-none w-3/4 max-w-sm ${
                        isActive ? 'z-20' : 'z-10'
                      }`}
                      drag="x" // Enable horizontal dragging
                      dragConstraints={{ left: 0, right: 0 }} // Lock vertical dragging
                      onDragEnd={handleDragEnd} // Handle drag end for swipe logic
                      initial={{ opacity: 0, x: xPosition }}
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        x: xPosition,
                        scale: isActive ? 1 : 0.85, // Slightly larger inactive cards for smoother scaling
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: 'spring', // Use spring animation for smoother feel
                        stiffness: 120, // Spring stiffness
                        damping: 14, // Lower damping for bouncier animations
                      }}
                    >
                      <ProjectCard project={project} isActive={isActive} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Project Details */}
            <ProjectInfo project={currentProject} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
