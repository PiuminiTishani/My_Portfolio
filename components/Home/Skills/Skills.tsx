"use client";

import { useRef } from "react";
import Image from "next/image";

const frontendSkills = [
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "React", logo: "/logos/react.png" },
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
  const renderSkillCard = (skill: typeof frontendSkills[0]) => (
  <div
    key={skill.name}
    className="flex items-center justify-start bg-[#16166367] border-2 opacity-90 px-3 py-2 rounded-xl text-left shadow-sm hover:scale-105 transition-transform w-full max-w-[170px] mx-auto min-w-s min-h-10">
    {/* Logo */}
    <div className="w-8 h-8 sm:w-10 sm:h-10 relative shrink-0">
      <Image src={skill.logo} alt={skill.name} fill className="object-contain p-1" />
    </div>

    {/* Skill Name */}
    <span className="ml-2 text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-sm whitespace-normal">{skill.name}</span>
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

      const speed = 25; // increase for stronger parallax
      const rotateY = ((x - centerX) / centerX) * speed;
      const rotateX = -((y - centerY) / centerY) * speed;
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      cardRef.current.style.boxShadow = `0 0 15px cyan`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      cardRef.current.style.boxShadow = `0 0 6px cyan`;
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="big-card bg-[#0f0f2f] border border-[#80e0ff20] rounded-2xl p-4 flex flex-col items-center shadow-[0_0_8px_#80e0ff] w-full h-full min-h-64"
      >
        <h3 className="text-xl font-bold mb-4 text-[#80e0ff]">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-0 w-full">{skills.map(renderSkillCard)}</div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-[#0d0d1f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-[#80e0ff]">Skills</h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr items-stretch justify-items-stretch gap-12">
  <BigCard title="Frontend Technologies" skills={frontendSkills} />
  <BigCard title="Backend Technologies" skills={backendSkills} />
  <BigCard title="Languages" skills={languages} />
  <BigCard title="Tools" skills={tools} />
</div>
      </div>

      {/* Marquee section - Full width */}
      <div className="mt-16 overflow-hidden w-full">
        <div className="flex gap-8 animate-marquee">
            {[...frontendSkills, ...backendSkills, ...languages, ...tools, ...frontendSkills, ...backendSkills].map((skill, index) => (
              <div key={index} className="shrink-0 w-16 h-16 relative hover: transition-all duration-400">
                <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
