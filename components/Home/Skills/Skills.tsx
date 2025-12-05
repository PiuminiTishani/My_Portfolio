"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  { name: "HTML", logo: "/logos/html.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "React Native", logo: "/logos/react-native.png" },
  { name: "Next.js", logo: "/logos/nextjs.png" },
  { name: "TailwindCSS", logo: "/logos/tailwind.png" },
  { name: "Bootstrap", logo: "/logos/bootstrap.png" },
];
const backendSkills = [
  { name: "PHP", logo: "/logos/php.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "Ballerina", logo: "/logos/ballerina.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
];
const languages = [
  { name: "C", logo: "/logos/C.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "Python", logo: "/logos/python.png" },
];
const tools = [
  { name: "Git", logo: "/logos/git.png" },
  { name: "Figma", logo: "/logos/figma.png" },
  { name: "Canva", logo: "/logos/canva.png" },
  { name: "Jira", logo: "/logos/jira.png" },
  { name: "Postman", logo: "/logos/postman.png" },
];

export default function SkillsSection() {
  const renderSkillCard = (skill: { name: string; logo: string }) => (
    <div
      key={skill.name}
      // CHANGED: Matched reference padding (px-2 py-2) and flex spacing
      className="flex items-center justify-center space-x-1 sm:space-x-2 bg-[#16166367] border-2 opacity-90 px-1.5 py-1 sm:px-2 sm:py-2 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:scale-105 transition-transform w-full min-w-0"
    >
      {/* Logo */}
      {/* CHANGED: Matched reference size: w-6 h-6 mobile, w-8 h-8 desktop */}
      <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 relative shrink-0">
        <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
      </div>

      {/* Skill Name */}
      {/* CHANGED: Matched reference text size: text-xs mobile, text-sm desktop */}
      <span className="text-white font-medium text-[9px] sm:text-xs md:text-sm truncate">
        {skill.name}
      </span>
    </div>
  );

  const BigCard = ({ title, skills }: { title: string; skills: typeof frontendSkills }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!cardRef.current) return;
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const centerX = width / 2;
      const centerY = height / 2;

      const speed = 20;
      const rotateY = ((x - centerX) / centerX) * speed;
      const rotateX = -((y - centerY) / centerY) * speed;
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      cardRef.current.style.boxShadow = `0 0 20px #80e0ff`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      cardRef.current.style.boxShadow = `0 0 8px rgba(128, 224, 255, 0.1)`;
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="skill-card big-card bg-[#0f0f2f] border border-[#80e0ff20] rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col items-center shadow-[0_0_8px_#80e0ff] w-full sm:w-[48%] mb-5 h-auto sm:min-h-[400px]"
      >
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 text-[#80dfffc7] tracking-wide text-center">{title}</h3>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 w-full flex-1 content-start">
          {skills.map(renderSkillCard)}
        </div>
      </div>
    );
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const skillCards = sectionRef.current.querySelectorAll('.skill-card');
      gsap.fromTo(
        skillCards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
    // CHANGED: Matched reference padding logic: px-[12vw] md:px-[7vw] lg:px-[20vw]
    <section id="skills" ref={sectionRef} className="relative py-24 text-white overflow-hidden px-[12vw] md:px-[7vw] lg:px-[20vw]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#08081f]/40 z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#80e0ff]">My Skills</h2>
        
      </div>

      {/* CHANGED: Switched to Flexbox with wrap and justify-between to match reference */}
      <div className="flex flex-wrap gap-2 lg:gap-5 py-10 justify-between">
        <BigCard title="Frontend" skills={frontendSkills} />
        <BigCard title="Backend" skills={backendSkills} />
        <BigCard title="Languages" skills={languages} />
        <BigCard title="Tools" skills={tools} />
      </div>

      {/* Marquee section - Full width outside container */}
      <div className="mt-16 overflow-hidden w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="flex gap-8 animate-marquee">
            {[...frontendSkills, ...backendSkills, ...languages, ...tools, ...frontendSkills, ...backendSkills].map((skill, index) => (
              <div key={index} className="shrink-0 w-12 h-16 relative hover:scale-110 transition-all duration-350">
                <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
              </div>
            ))}
        </div>
      </div>
      </div>
    </section>
  );
}