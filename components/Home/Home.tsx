import React from 'react'
import Hero from './Hero/Hero';
import SkillsSection from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import InterestsGallery from './Interests/Interests';
import ContactSection from './Contact/Contact';
import Footer from './Footer/Footer';
import ParticlesHero from './Hero/ParticleBackground';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Global Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticlesHero />
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Hero />
        <SkillsSection />
        <Projects />
        <Education />
        <Experience />
        <InterestsGallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default Home;