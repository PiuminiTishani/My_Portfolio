"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Achievement {
  id: number;
  organization: string;
  image: string;
  duration: string;
  description: string;
  roles: string[];
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    organization: "IoT and Embedded Systems Research Labs -Faculty of IT",
    image: "/images/ies.jpg",
    duration: "2025 - Present",
    description: "Mentoring students, coordinating hands-on sessions, and supporting projects within the IoT and Embedded Systems Research Labs to foster learning and innovation.",
    roles: [
      "Mentor - Sessions Team - IES Labs"
    ]
  },
  {
    id: 2,
    organization: "Faculty of Information Technology - University of Moratuwa",
    image: "/images/faculty.jpg",
    duration: "2023 - Present",
    description: "Engaged in mentoring, organizing events, and fostering community within the Faculty of Information Technology.",
    roles: [
      "Mentor - Sessions Team - IES Labs",
      "Member - FIT Tunes 24/25 , 25/26",
      "Company Coordinator - FIT Sixes 2024"
    ]
  },
  {
    id: 3,
    organization: "Dancing Society of University of Moratuwa",
    image: "/images/dancing.jpg",
    duration: "2024 - Present",
    description: "Contributing to the digital presence and event organization of one of the university's most vibrant cultural societies.",
    roles: [
      "Director of IT and Social Media Directory (Term 2025/2026)",
      "Organizing Committee Member - Hadathala 2.0"
    ]
  },
  {
    id: 4,
    organization: "Rotaract Club of University of Moratuwa",
    image: "/images/rotaract.jpg",
    duration: "2023 - Present",
    description: "Active member involved in service projects, career development initiatives, and leadership roles within the Rotaract community.",
    roles: [
      "Rotaractor",
      "Co Chair – Rota Spark 2024",
      "Co chair – Global Wanderlust 2023",
      "Company & Panel Coordinator – Are You Ready 2024 (The Official Career Fair)",
      "Editorial Team Member – Monster Mash 2023",
      "Editorial Team Member – Cricket Fiesta 2023"
    ]
  },
  {
    id: 5,
    organization: "IEEE Student Branch of University of Moratuwa",
    image: "/images/ieee.jpeg",
    duration: "2024 - Present",
    description: "Contributing to technical conferences and educational programs that advance technology and professional development.",
    roles: [
      "Program Committee Member - MERCon 2025",
      "Editorial Committee Member - MERCon 2024",
      "English Seminar Conductor - Nena Saviya 2024"
    ]
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const openModal = (e: React.MouseEvent, achievement: Achievement) => {
    e.stopPropagation();
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedAchievement]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
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
      <section id="experience" ref={sectionRef} className="py-20 text-white relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0d0d28]/40 z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center text-[#80e0ff]">
              Experience
            </h2>

            {/* Cards Stack Container */}
            <div className="relative h-[600px] md:h-[600px] flex items-center justify-center mt-8">
              <div className="relative w-full max-w-5xl h-[500px] md:h-[400px]">
                {achievementsData.map((achievement, index) => {
                  const isVisible = index >= currentIndex;
                  const stackPosition = index - currentIndex;
                  const isTop = index === currentIndex;

                  return (
                    <div
                      key={achievement.id}
                      onClick={isTop ? handleCardClick : undefined}
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        isTop ? "cursor-pointer" : "pointer-events-none"
                      } ${
                        !isVisible 
                          ? "opacity-0 scale-[1.15] -translate-y-10 z-0" 
                          : "opacity-100 z-10"
                      }`}
                      style={{
                        transform: isVisible
                          ? `translateY(${stackPosition * 20}px) scale(${1 - stackPosition * 0.05})`
                          : undefined,
                        zIndex: achievementsData.length - index,
                      }}
                    >
                      <div
                        className={`bg-[#0f0f2f]/85 backdrop-blur-lg rounded-3xl p-6 md:p-12 h-full shadow-2xl border border-[#80e0ff20] flex flex-col gap-6 md:flex-row md:gap-8 items-center hover:shadow-[0_0_40px_rgba(128,224,255,0.3)] hover:border-[#80e0ff40] transition-all duration-300 ${
                          isTop ? "hover:scale-[1.02]" : ""
                        }`}
                      >
                        {/* Left side - Image */}
                        <div className="w-full md:w-2/5 h-48 md:h-full relative rounded-2xl overflow-hidden shrink-0">
                          <Image
                            src={achievement.image}
                            alt={achievement.organization}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Right side - Content */}
                        <div className="w-full md:w-3/5 flex flex-col justify-center">
                          <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-white line-clamp-2">
                            {achievement.organization}
                          </h3>
                          <p className="text-[#80e0ff] text-xs md:text-sm font-semibold mb-3 md:mb-4">
                            {achievement.duration}
                          </p>
                          <p className="text-gray-300 text-xs md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-3 md:line-clamp-4">
                            {achievement.description}
                          </p>

                          {/* View Positions Button */}
                          {isTop && (
                            <button 
                              onClick={(e) => openModal(e, achievement)}
                              className="px-5 py-2 text-sm md:text-base bg-[#00035bb4] hover:bg-[#2e1190b8] rounded-full border-2 text-white font-semibold transition-all duration-300 self-start"
                            >
                              View Positions
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Outside Section */}
      {selectedAchievement && (
        <div
          // UPDATED: pt-20 md:pt-24 (approx 80px-96px)
          // This creates a dedicated space for the navbar.
          // items-center then centers the modal in the REMAINING vertical space.
          // This results in Equal Top Gap (below nav) and Equal Bottom Gap (above screen edge).
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-9999 flex justify-center items-center px-4 pt-20 md:pt-24 pb-0 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            // max-h-[85vh] allows it to be large but respects the padding
            className="bg-[#0f0f2f]/40 backdrop-blur-xl text-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative p-6 md:p-8 border border-[#80e0ff30] shadow-lg shadow-[#80e0ff15] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 text-3xl hover:text-white z-10 transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="flex flex-col gap-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                  {selectedAchievement.organization}
                </h2>
                <p className="text-[#80e0ff] text-base font-semibold mb-4">
                  {selectedAchievement.duration}
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {selectedAchievement.description}
                </p>
              </div>

              <div className="border-t border-[#80e0ff30] pt-6">
                <h3 className="text-xl font-bold text-[#80e0ff] mb-4">Positions Held:</h3>
                <ul className="space-y-3">
                  {selectedAchievement.roles.map((role, idx) => (
                    <li
                      key={idx}
                      className="text-gray-200 text-sm md:text-base flex items-start bg-[#0f0f2f]/25 backdrop-blur-sm p-3 rounded-lg border border-[#80e0ff10]"
                    >
                      <span className="text-[#80e0ff] mr-3 text-xl shrink-0">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}