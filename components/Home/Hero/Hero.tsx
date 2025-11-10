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
        </div>
  )
}

export default Hero