'use client';
import React, { useState, useEffect } from 'react'
import Hero from './Hero/Hero';
import SkillsSection from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import InterestsGallery from './Interests/Interests';
import ContactSection from './Contact/Contact';
import Footer from './Footer/Footer';
import ParticlesHero from './Hero/ParticleBackground';
import ParticlesLoader from './Hero/ParticleBackgroundLoader';
import { FaArrowUp, FaCode } from 'react-icons/fa';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    // Scroll to top on mount/refresh
    window.scrollTo(0, 0);

    // Animate progress from 0 to 100 over 4 seconds
    const duration = 4000;
    const startTime = Date.now();

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressTimer);
      }
    }, 16); // ~60fps

    // Show flash and hide loading screen after reaching 100%
    const timer = setTimeout(() => {
      setShowFlash(true);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setShowFlash(false), 100);
      }, 300);
    }, duration + 500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past initial viewport height
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden">
          {/* Slower Particle Background for Loading Screen */}
          <div className="absolute inset-0 z-0">
            <ParticlesLoader />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0d0d1f]/60 z-1"></div>

          {/* Center Content */}
          <div className="relative z-10 text-center px-4">
            {/* Animated Circles */}
            <div className="relative mb-16">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-2 border-[#80e0ff]/20 rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
              </div>
              
              {/* Middle pulsing ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 border-2 border-[#80e0ff]/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
              </div>
              
              {/* Inner rotating ring opposite direction */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 border-2 border-[#80e0ff]/40 rounded-full animate-spin-reverse" style={{ animationDuration: '10s' }}></div>
              </div>
              
              {/* Center glowing circle with icon */}
              <div className="relative flex items-center justify-center w-48 h-48 mx-auto">
                <div className="w-20 h-20 bg-linear-to-br from-[#80e0ff] to-[#60c0ff] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(128,224,255,0.6)] animate-pulse" style={{ animationDuration: '2s' }}>
                  <FaCode className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            {/* Percentage Display with Text */}
            <div className="space-y-6">
              {/* Progress Bar with Text on Sides */}
              <div className="w-80 max-w-full mx-auto">
                {/* Text and Percentage Above Progress Bar */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400 text-sm md:text-base">Compiling awesomeness…</span>
                  <span className="text-[#80e0ff] text-lg md:text-xl font-semibold">{Math.floor(progress)}%</span>
                </div>
                
                <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-[#80e0ff] to-[#60c0ff] rounded-full transition-all duration-200 ease-out shadow-[0_0_15px_rgba(128,224,255,0.8)]"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Animated dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2.5 h-2.5 bg-[#80e0ff] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2.5 h-2.5 bg-[#80e0ff] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                <div className="w-2.5 h-2.5 bg-[#80e0ff] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flash Effect */}
      {showFlash && (
        <div className="fixed inset-0 z-10000 bg-white animate-flash pointer-events-none"></div>
      )}

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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-100 p-4 bg-[#80e0ff] hover:bg-[#60c0df] active:bg-[#60c0df] rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(128,224,255,0.5)] transition-all duration-300 hover:scale-110 active:scale-110 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 text-[#0d0d1f] group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  )
}

export default Home;