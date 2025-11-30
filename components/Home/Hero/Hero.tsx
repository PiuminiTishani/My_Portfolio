'use client';
import Image from 'next/image'
import React, { use } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>

<ParticlesHero/>

        <div className='relative z-10 flex flex-col items-center'>
            <Image src="/images/s1.png" alt="heroimage" width={150} height={150} className='rounded-full border-8 border-[#0c0c48aa]'></Image>
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
            <button className='mt-6 px-10 py-4 bg-blue-700 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
                <span>See my work</span>
                <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
            </button>
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