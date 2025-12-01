import React from 'react'
import Hero from './Hero/Hero';
import SkillsSection from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Experience from './Experience/Experience';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SkillsSection />
      <Projects />
      <Education />
      <Experience />
    </div>
  )
}

export default Home;