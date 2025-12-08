'use client';
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { FaFigma, FaCode, FaDatabase } from 'react-icons/fa';
import Typewriter from 'typewriter-effect'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card');
      gsap.fromTo(
        serviceCards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (y / rect.height) * 20;
    const rotateY = (x / rect.width) * -20;
    
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };
  const services = [
    
    {
      icon: <FaCode className="w-12 h-12" />,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using modern technologies like React, Next.js, and TypeScript."
    },
    {
      icon: <FaDatabase className="w-12 h-12" />,
      title: "Backend Development",
      description: "Developing robust server-side solutions with Node.js, Express, and databases to power your applications."
    },
    {
      icon: <FaFigma className="w-12 h-12" />,
      title: "UI / UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement across all platforms."
    },
  ];

  return (
    <div id="about" className='relative h-auto min-h-screen text-white overflow-hidden'>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a2f]/40 to-[#0d0d25]/95 z-0 pointer-events-none"></div>

        {/* Hero Content Section */}
        <div ref={heroRef} className='relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-40 md:pt-44 pb-20'>
            
            {/* Text Content - Left Side */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold tracking-wide leading-tight'>
                  Hey there, I am <br className="hidden md:block" />
                  <span className='text-[#80e0ff]'>Piumini Tishani</span>
              </h1>
              <h2 className='mt-6 text-xl sm:text-2xl md:text-3xl font-medium flex items-center flex-wrap justify-center md:justify-start gap-2'>
                  I am a 
                  <span className='text-[#826cd2] font-semibold'>
                      <Typewriter options={{
                          strings:[
                              'Full Stack Developer',
                              'UI / UX Designer',
                              'Web Developer',
                              'Passionate Coder'
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                      }} />
                  </span> 
              </h2>

              {/* Description */}
              <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                I develop scalable web applications, focusing on the seamless user experience. Knowledge of modern frameworks enables me to build responsive, high-performance interfaces. I am dedicated to ongoing learning-ensuring every project capitalizes on the latest industry standards to provide quality results.
              </p>

              {/* Download CV Button */}
              <a 
                href="https://drive.google.com/file/d/1c199Ef0JP8YNFDYCAstLv83Yl28uZB49/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-4 bg-linear-to-r from-purple-900 to-blue-800 hover:from-purple-700 hover:to-blue-700 active:from-purple-700 active:to-blue-700 rounded-full text-white font-semibold text-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-105 active:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Image Circle - Right Side */}
            <div className="relative group shrink-0">
              <div 
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-[#80e0ff]/30 shadow-[0_0_40px_rgba(128,224,255,0.3)] group-hover:border-[#80e0ff]/50 group-hover:shadow-[0_0_60px_rgba(128,224,255,0.5)] transition-all duration-300 ease-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s'
                }}
              >
                <Image 
                  src="/images/photo.jpg" 
                  alt="Piumini Tishani" 
                  fill
                  className="object-cover object-center scale-135"
                  priority
                />
              </div>
            </div>

        </div>

        {/* Services Cards Section */}
        <div ref={servicesRef} className="relative z-10 w-full max-w-6xl px-6 md:px-12 mx-auto pb-32">
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-[#0f0f2f]/40 backdrop-blur-md border border-[#80e0ff]/30 rounded-3xl p-8 hover:scale-105 hover:bg-[#0f0f2f]/60 hover:border-[#80e0ff]/50 active:scale-105 active:bg-[#0f0f2f]/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(128,224,255,0.3)]"
              >
                <div className="flex justify-center mb-6 text-[#80e0ff]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-center text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
            </div>

    )

}

export default Hero