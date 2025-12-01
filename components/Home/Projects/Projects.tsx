"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, Project } from "@/constant/constant"; // Adjust path if needed
import ProjectModal from "./ProjectModal"; // Adjust path if needed

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Separate projects for the layout
  const featuredProject = projects.find((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);
  
  // Get first 4 other projects for the main grid (2 top row, 2 bottom row)
  const gridProjects = otherProjects.slice(0, 4);
  const remainingProjects = otherProjects.slice(4); // Any additional projects

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#80e0ff]">
          Projects
        </h2>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* BIG FEATURED PROJECT - Takes full height on left */}
          {featuredProject && (
            <div
              onClick={() => openModal(featuredProject)}
              className="relative bg-[#1110515e] rounded-xl border overflow-hidden cursor-pointer group text-white lg:row-span-2 min-h-[60vh] lg:min-h-[600px]"
            >
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black/80 to-transparent w-full">
                <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                <p className="text-gray-300 mt-1">{featuredProject.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <span className="text-xl font-bold">View Details</span>
                </div>
              </div>
            </div>
          )}

          {/* Right side grid - 2x2 layout */}
          {gridProjects.slice(0, 4).map((project, index) => (
            <SmallProjectCard 
              key={project.title} 
              project={project} 
              openModal={openModal}
              className="lg:col-span-1"
            />
          ))}
        </div>

        {/* Additional Projects if any */}
        {remainingProjects.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {remainingProjects.map((project) => (
              <SmallProjectCard key={project.title} project={project} openModal={openModal} />
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};


// Reusable Small Project Card Component
interface SmallCardProps {
  project: Project;
  openModal: (project: Project) => void;
  className?: string;
}

const SmallProjectCard = ({ project, openModal, className = "" }: SmallCardProps) => {
  return (
    <div
      onClick={() => openModal(project)}
      className={`relative bg-[#1110515e] rounded-xl border overflow-hidden cursor-pointer group text-white h-auto min-h-[250px] lg:min-h-[290px] ${className}`}
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
      />

      {/* Permanent text at bottom (same as featured card) */}
      <div className="absolute bottom-0 left-0 p-4 bg-linear-to-t from-black/80 to-transparent w-full">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-300 mt-1">{project.description}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-4">
          <span className="text-lg font-bold">View Details</span>
        </div>
      </div>
    </div>
  );
};


export default Projects;