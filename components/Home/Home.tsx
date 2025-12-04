import React from 'react'
import Hero from './Hero/Hero';
import SkillsSection from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import InterestsGallery from './Interests/Interests';
import ContactSection from './Contact/Contact';
import Footer from './Footer/Footer';

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
      <Footer />
    </div>
  )
}

export default Home;