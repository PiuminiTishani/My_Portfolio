"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/constant/constant"; // Adjust path if needed
import ProjectModal from "./ProjectModal"; // Adjust path if needed
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Separate projects for the layout
  const featuredProject = projects.find((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);
  
  // Get first 4 other projects for the main grid (2 top row, 2 bottom row)
  const gridProjects = otherProjects.slice(0, 4);
  const remainingProjects = otherProjects.slice(4); // Any additional projects

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (sectionRef.current) {
      const projectCards = sectionRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        projectCards,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="projects" ref={sectionRef} className="relative py-20 px-4 md:px-8">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0d0d28]/40 z-0 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#80e0ff]">
            Projects
          </h2>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* BIG FEATURED PROJECT - Takes full height on left */}
          {featuredProject && (
            <div
              onClick={() => openModal(featuredProject)}
              className="project-card relative bg-[#1110515e] rounded-xl border overflow-hidden cursor-pointer group text-white lg:row-span-2 min-h-[60vh] lg:min-h-[600px] flex flex-col"
            >
              <div className="relative w-full h-[60%] overflow-hidden p-4 bg-black/40">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                  <p className="text-gray-300 mt-2">{featuredProject.description}</p>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <span className="text-xl font-bold">View Details</span>
                </div>
              </div>
            </div>
          )}

          {/* Right side grid - 2x2 layout */}
          {gridProjects.slice(0, 4).map((project) => (
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
        </div>
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
      className={`project-card relative bg-[#1110515e] rounded-xl border overflow-hidden cursor-pointer group text-white h-auto min-h-[250px] lg:min-h-[290px] flex flex-col ${className}`}
    >
      {/* Image at top */}
      <div className="relative w-full h-[55%] overflow-hidden p-4 bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
        />
      </div>

      {/* Text content below */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-300 text-sm mt-1">{project.description}</p>
        </div>
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