import React from 'react';
import { Github, ExternalLink, MessageSquare, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-5 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Links */}
          <div className="flex space-x-8">
            <a
              href="https://github.com/raunakkaushal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF0B0B] transition-colors duration-300"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/raunakkaushal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF0B0B] transition-colors duration-300"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://wa.me/919369511514"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF0B0B] transition-colors duration-300"
            >
              <MessageSquare className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
