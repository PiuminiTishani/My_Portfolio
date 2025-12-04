import React from 'react'
import Hero from './Hero/Hero';
import SkillsSection from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import InterestsGallery from './Interests/Interests';
import ContactSection from './Contact/Contact';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SkillsSection />
      <Projects />
      <Education />
      <Experience />
      <InterestsGallery />
      <ContactSection />
    </div>
  )
}

export default Home;