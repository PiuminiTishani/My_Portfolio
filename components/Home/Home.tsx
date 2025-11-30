import React from 'react'
import Hero from './Hero/Hero';
import SkillsSection from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SkillsSection />
      <Projects />
      <Education />
    </div>
  )
}

export default Home;