// components/Home/Projects/ProjectModal.tsx

import Image from 'next/image';
import { Project } from '@/constant/constant';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-[#100f3a] text-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative p-6 md:p-8 border border-purple-800 shadow-lg shadow-purple-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 text-3xl hover:text-white z-10 transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="flex flex-col gap-6">
          
          {/* Project Image */}
          <div className="w-full h-auto rounded-lg overflow-hidden border border-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="object-cover w-full"
            />
          </div>

          {/* Title + Description */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-200">
              {project.title}
            </h2>

            <p className="text-gray-300 leading-relaxed text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 py-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#2e1190b8] text-gray-200 px-3 py-1 rounded-full text-xs md:text-sm shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ⭐ NEW — Demo + Code Buttons inside modal */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">

            {/* Live Demo */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#235ea0] hover:bg-[#2e1190b8] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Live Demo
              </a>
            )}

            {/* Frontend Code */}
            {project.frontendLink && (
              <a
                href={project.frontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#235ea0] hover:bg-[#2e1190b8] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Frontend Code
              </a>
            )}

            {/* Backend Code */}
            {project.backendLink && (
              <a
                href={project.backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#235ea0] hover:bg-[#2e1190b8] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Backend Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
