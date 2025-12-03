"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration?: string;
  grade?: string;
  description?: string;
  logo: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "BSc. (Hons) in Information Technology",
    institution: "University of Moratuwa, Sri Lanka",
    duration: "2021 - Present",
    grade: "3.54 CGPA",
    description: "Currently pursuing a BSc (Hons) in Information Technology at the University of Moratuwa, Sri Lanka, focusing on core areas such as software engineering, web technologies, data structures, databases, and emerging IT practices, while gaining hands-on experience through projects and industry-aligned coursework.",
    logo: "/logos/uom.png",
  },
  {
    id: 2,
    degree: "A/L in ICT, Combined Maths and Physics",
    institution: "Ferguson High School, Ratnapura",
    duration: "2019 - 2021",
    grade: "A B C",
    description: "Completed my Advanced Level (A/L) education at Ferguson High School, Ratnapura, specialized in Combined Maths, Physics, and ICT. ",
    logo: "/logos/ferguson.png",
  },
  {
    id: 3,
    degree: "Completed AAT Level I",
    institution: "AAT Sri Lanka",
    duration: "2019 Jan - 2019 Jul",
    description: "Successfully completed AAT Level 1 in the July 2019 Examination in English Medium, gaining foundational knowledge in accounting principles, financial record-keeping, and basic business practices.",
    logo: "/logos/aat.png",
  },
  {
    id: 4,
    degree: "Partially Completed AAT Level II",
    institution: "AAT Sri Lanka",
    duration: "2019 Jul - 2020 Jan",
    description: "Completed part of the AAT Level 2 Examination in English Medium, gaining foundational knowledge in business studies, law, and financial processes and accounting.",
    logo: "/logos/aat.png",
  },
  {
    id: 5,
    degree: "O/L Examination",
    institution: "JMC College International, Ratnapura",
    duration: "2007 - 2018",
    grade: "9 As",
    description: "Successfully completed O/L examinations with a strong emphasis on core subjects including Mathematics, Science, English, and Information & Communication Technology along with diverse other subjects, building a solid academic foundation for further studies.",
    logo: "/logos/jmc.png",
  },
];

export default function Education() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Reset refs array to match data length
    itemRefs.current = itemRefs.current.slice(0, educationData.length);

    itemRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-[#0a0a1f] text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-center text-[#80e0ff]">
          Education
        </h2>
        <br />

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, centered on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-[#80e0ff] via-[#80e0ff50] to-transparent h-full"></div>
          {/* Mobile vertical line on the left */}
          <div className="md:hidden absolute left-6 w-1 bg-linear-to-b from-[#80e0ff] via-[#80e0ff50] to-transparent h-full"></div>

          {/* Education Items */}
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative mb-12"
            >
              {/* Desktop: Left Card (odd index), Mobile: All cards on right */}
              {index % 2 === 0 ? (
                <div className="flex items-start justify-between">
                  {/* Card on Left (desktop) / Right (mobile) */}
                  <div className="w-full md:w-[46%] pl-16 md:pl-0">
                    <div className="bg-[#0f0f2f] border border-[#80e0ff30] rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-[0_0_20px_rgba(128,224,255,0.3)] transition-all duration-300">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 relative shrink-0 bg-white rounded-full p-1.5 sm:p-2">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-xl font-bold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm">{edu.institution}</p>
                          {edu.duration && <p className="text-gray-500 text-xs mt-1">{edu.duration}</p>}
                        </div>
                      </div>
                      {edu.grade && (
                        <div className="mb-2 sm:mb-3">
                          <span className="text-xs sm:text-sm text-gray-400">Grade: </span>
                          <span className="text-[#80e0ff] font-semibold text-xs sm:text-base">{edu.grade}</span>
                        </div>
                      )}
                      {edu.description && (
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Center Circle - adjusted for mobile */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 sm:top-8 w-8 h-8 sm:w-12 sm:h-12 bg-[#0a0a1f] border-2 sm:border-4 border-[#80e0ff] rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-[#80e0ff] rounded-full animate-pulse"></div>
                  </div>

                  {/* Empty Space on Right (desktop only) */}
                  <div className="hidden md:block w-[46%]"></div>
                </div>
              ) : (
                /* Right Card (even index on desktop), Mobile: All cards on right */
                <div className="flex items-start justify-between">
                  {/* Empty Space on Left (desktop only) */}
                  <div className="hidden md:block w-[46%]"></div>

                  {/* Center Circle - adjusted for mobile */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 sm:top-8 w-8 h-8 sm:w-12 sm:h-12 bg-[#0a0a1f] border-2 sm:border-4 border-[#80e0ff] rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-[#80e0ff] rounded-full animate-pulse"></div>
                  </div>

                  {/* Card on Right */}
                  <div className="w-full md:w-[46%] pl-16 md:pl-0">
                    <div className="bg-[#0f0f2f] border border-[#80e0ff30] rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-[0_0_20px_rgba(128,224,255,0.3)] transition-all duration-300">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 relative shrink-0 bg-white rounded-full p-1.5 sm:p-2">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-xl font-bold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm">{edu.institution}</p>
                          {edu.duration && <p className="text-gray-500 text-xs mt-1">{edu.duration}</p>}
                        </div>
                      </div>
                      {edu.grade && (
                        <div className="mb-2 sm:mb-3">
                          <span className="text-xs sm:text-sm text-gray-400">Grade: </span>
                          <span className="text-[#80e0ff] font-semibold text-xs sm:text-base">{edu.grade}</span>
                        </div>
                      )}
                      {edu.description && (
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
