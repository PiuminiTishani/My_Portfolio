'use client';
import Image from 'next/image'
import React from 'react'
import { FaFigma, FaCode, FaDatabase } from 'react-icons/fa';
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground';

const Hero = () => {
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
    <div className='relative h-auto min-h-screen flex items-start justify-center text-white overflow-hidden flex-col pb-32 pt-32'>

<ParticlesHero/>

        <div className='relative z-10 flex flex-col items-center w-full px-4'>
            <Image src="/images/photo.jpg" alt="heroimage" width={150} height={150} className='rounded-full border-8 border-[#0c0c48aa]'></Image>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                Hi, I am <span className='text-cyan-600'>Piumini Tishani</span>
            </h1>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                I am a 
                <span className='text-cyan-300 font-semibold'>
                    <Typewriter options={{
                        strings:[
                            'Passionate Coder',
                            'Full Stack Developer',
                            'Web Developer',
                            'UI / UX Designer'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        wrapperClassName:"pl-2"
                    }} />
                </span> 
            </h2>
           
        </div>

        {/* Services Cards Section */}
        <div className="relative z-10 mt-20 w-full max-w-6xl px-4 mx-auto">
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0f0f2f]/40 backdrop-blur-md border border-[#80e0ff30] rounded-3xl p-8 hover:scale-105 hover:bg-[#0f0f2f]/60 hover:border-[#80e0ff50] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(128,224,255,0.3)]"
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
        
                {/* Decorative separator: SVG wave that fades to transparent so sections blend */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 pointer-events-none z-0">
                    <svg
                        className="relative block w-full h-28 md:h-30"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <defs>
                            {/* Gradient: from hero bottom-ish color to the Skills section background (#0d0d1f)
                                    Use an opaque gradient (not transparent) so the SVG bottom exactly matches
                                    the next section color and avoids a visible seam. */}
                            <linearGradient id="heroFade" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#071127" stopOpacity="1" />
                                <stop offset="100%" stopColor="#0d0d1f" stopOpacity="1" />
                            </linearGradient>

                            {/* a subtle translucent overlay path to soften the ridge */}
                            <linearGradient id="softFade" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <path d="M0,0 C300,80 900,0 1200,80 L1200,120 L0,120 Z" fill="url(#heroFade)" />
                        <path d="M0,20 C300,85 900,20 1200,85 L1200,120 L0,120 Z" fill="url(#softFade)" />
                    </svg>
                </div>

            </div>

    )

}

export default Hero