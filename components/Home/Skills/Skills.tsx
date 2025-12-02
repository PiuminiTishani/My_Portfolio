"use client";

import { useRef } from "react";
import Image from "next/image";

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
  { name: "C", logo: "/logos/nodejs.png" },
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
        className="big-card bg-[#0f0f2f] border border-[#80e0ff20] rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col items-center shadow-[0_0_8px_#80e0ff] w-full sm:w-[48%] mb-5 h-auto sm:min-h-[400px]"
      >
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 text-[#80dfffc7] tracking-wide text-center">{title}</h3>
        
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 w-full flex-1 content-start">
          {skills.map(renderSkillCard)}
        </div>
      </div>
    );
  };

  return (
    // CHANGED: Matched reference padding logic: px-[12vw] md:px-[7vw] lg:px-[20vw]
    <section className="py-24 bg-[#0d0d1f] text-white overflow-hidden px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#80e0ff]">My Skills</h2>
        <div className="w-24 h-1 bg-[#80e0ff] mx-auto mt-2 mb-4"></div>
      </div>

      {/* CHANGED: Switched to Flexbox with wrap and justify-between to match reference */}
      <div className="flex flex-wrap gap-2 lg:gap-5 py-10 justify-between">
        <BigCard title="Frontend" skills={frontendSkills} />
        <BigCard title="Backend" skills={backendSkills} />
        <BigCard title="Languages" skills={languages} />
        <BigCard title="Tools" skills={tools} />
      </div>

      {/* Marquee section */}
      <div className="mt-10 overflow-hidden w-full">
        <div className="flex gap-8 animate-marquee">
            {[...frontendSkills, ...backendSkills, ...languages, ...tools, ...frontendSkills, ...backendSkills].map((skill, index) => (
              <div key={index} className="shrink-0 w-12 h-16 relative hover:scale-110 transition-all duration-400">
                <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}