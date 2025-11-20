"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    shortDesc: "A personal portfolio to showcase projects and skills.",
    details:
      "Built with Next.js and TailwindCSS. Features a dynamic projects section, responsive layout, and smooth animations.",
    repoLink: "#",
    liveDemoLink: "#",
    image: "/projects/portfolio.png",
  },
  {
    title: "E-commerce Platform",
    shortDesc: "An online store with payment integration and admin dashboard.",
    details:
      "Includes product catalog, shopping cart, checkout with Stripe API, and admin panel for managing products and orders.",
    repoLink: "#",
    liveDemoLink: "#",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Weather App",
    shortDesc: "Real-time weather updates with API integration.",
    details:
      "Fetches live weather data from OpenWeatherMap API. Features include location search, temperature units toggle, and responsive UI.",
    repoLink: "#",
    liveDemoLink: "#",
    image: "/projects/weather.png",
  },
  {
    title: "Task Management Tool",
    shortDesc: "Manage and track tasks efficiently in a collaborative environment.",
    details:
      "Supports creating, updating, and deleting tasks. Includes user authentication, team collaboration, and drag-and-drop task board.",
    repoLink: "#",
    liveDemoLink: "#",
    image: "/projects/tasks.png",
  },
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // start scrolling when top hits bottom
  });

  // Map scroll progress to card translateY
  const cardOffset = useTransform(scrollYProgress, [0, 1], [0, -300]); // adjust -300 for overlap

  return (
    <section className="relative py-20 bg-[#0d0d1f] flex flex-col items-center min-h-screen">
      <h2 className="text-4xl font-bold mb-16 text-center text-[#80e0ff]">Projects</h2>

      <div
        ref={containerRef}
        className="w-full max-w-6xl relative flex flex-col items-center"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            style={{ y: cardOffset }}
            className={`absolute top-0 bg-[#0f0f2f] border border-[#80e0ff20] rounded-2xl shadow-lg w-[90%] md:w-[700px] p-6`}
          >
            {/* Glow background */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#80e0ff40] via-[#00fff580] to-[#80e0ff40] opacity-30 blur-xl pointer-events-none"></div>

            {/* Image */}
            <div className="w-full h-56 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h3 className="text-2xl font-bold text-[#80e0ff] mb-2 relative z-10">
              {project.title}
            </h3>
            <p className="text-white relative z-10">{project.shortDesc}</p>

            <div className="mt-4 flex gap-4 relative z-10">
              <a
                href={project.repoLink}
                target="_blank"
                className="px-4 py-2 bg-[#80e0ff20] text-[#80e0ff] rounded-lg hover:bg-[#80e0ff40] transition"
              >
                Repository
              </a>
              <a
                href={project.liveDemoLink}
                target="_blank"
                className="px-4 py-2 bg-[#80e0ff20] text-[#80e0ff] rounded-lg hover:bg-[#80e0ff40] transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spacer so container can scroll */}
      <div className="h-[150vh]" />
    </section>
  );
}

// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// const projects = [
//   {
//     title: "Portfolio Website",
//     shortDesc: "A personal portfolio to showcase projects and skills.",
//     repoLink: "#",
//     liveDemoLink: "#",
//     image: "/projects/portfolio.png",
//   },
//   {
//     title: "E-commerce Platform",
//     shortDesc: "An online store with payment integration and admin dashboard.",
//     repoLink: "#",
//     liveDemoLink: "#",
//     image: "/projects/ecommerce.png",
//   },
//   {
//     title: "Weather App",
//     shortDesc: "Real-time weather updates with API integration.",
//     repoLink: "#",
//     liveDemoLink: "#",
//     image: "/projects/weather.png",
//   },
//   {
//     title: "Task Management Tool",
//     shortDesc: "Manage and track tasks efficiently in a collaborative environment.",
//     repoLink: "#",
//     liveDemoLink: "#",
//     image: "/projects/tasks.png",
//   },
// ];

// export default function ProjectsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const maxStackOffset = 60; // how much each card will stack above the first

//   return (
//     <section className="relative py-20 bg-[#0d0d1f] flex flex-col items-center min-h-screen">
//       <h2 className="text-4xl font-bold mb-16 text-center text-[#80e0ff] z-10 relative">
//         Projects
//       </h2>

//       <div
//         ref={containerRef}
//         className="relative w-full max-w-6xl flex flex-col items-center"
//         style={{ height: `${projects.length * 300}px` }} // extra height for stacking scroll
//       >
//         {projects.map((project, index) => {
//           // first card is pinned; others stack progressively
//           const start = 0;
//           const end = 1;
//           const y = useTransform(
//             scrollYProgress,
//             [start, end],
//             [index * 0, -index * maxStackOffset]
//           );

//           return (
//             <motion.div
//               key={project.title}
//               style={{ y, zIndex: projects.length - index }}
//               className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#0f0f2f] border border-[#80e0ff20] rounded-2xl shadow-lg w-[90%] md:w-[700px] p-6`}
//             >
//               {/* Image */}
//               <div className="w-full h-56 relative rounded-xl overflow-hidden mb-4">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <h3 className="text-2xl font-bold text-[#80e0ff] mb-2">{project.title}</h3>
//               <p className="text-white mb-4">{project.shortDesc}</p>

//               <div className="flex gap-4">
//                 <a
//                   href={project.repoLink}
//                   target="_blank"
//                   className="px-4 py-2 bg-[#80e0ff20] text-[#80e0ff] rounded-lg hover:bg-[#80e0ff40] transition"
//                 >
//                   Repository
//                 </a>
//                 <a
//                   href={project.liveDemoLink}
//                   target="_blank"
//                   className="px-4 py-2 bg-[#80e0ff20] text-[#80e0ff] rounded-lg hover:bg-[#80e0ff40] transition"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Spacer to allow scrolling past stacked cards */}
//       <div className="h-[150vh]" />
//     </section>
//   );
// }
