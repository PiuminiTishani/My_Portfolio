'use client';
import { NavLinks } from '@/constant/constant';
import React, { useEffect, useState } from 'react'
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';


type Props ={
  openNav: ()=>void;
};

const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() =>{
    const handler=()=>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return()=> window.removeEventListener('scroll', handler);
  }, []);


  return (
    <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-10000 fixed w-full`}
    >
        <div className='flex items-center h-full w-90% mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2 pl-4 md:pl-20 flex-1'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-xl md:text-2xl text-white font-bold'>Piumini</h1>
            </div>
            {/* Nav Links */}
            <div className='hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2'>
              {NavLinks.map((link) => (
                <a key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
                  <p>{link.Label}</p>
                </a>
              ))}
            </div>
            {/* Social Icons - Visible on md and above */}
            <div className='hidden md:flex items-center space-x-4 pr-4 md:pr-8 lg:pr-20 flex-1 justify-end'>
              <a 
                href="https://github.com/PiuminiTishani" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-[#80e0ff] active:bg-[#80e0ff] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-110 group'
              >
                <FaGithub className='w-5 h-5 text-white group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-colors' />
              </a>
              <a 
                href="https://www.linkedin.com/in/piumini-tishani-209b70269/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-[#80e0ff] active:bg-[#80e0ff] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-110 group'
              >
                <FaLinkedin className='w-5 h-5 text-white group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-colors' />
              </a>
            </div>
            {/* Burger Menu - Mobile Only */}
            <div className='flex md:hidden items-center pr-4'>
              <HiBars3BottomRight 
                onClick={openNav} 
                className='w-8 h-8 cursor-pointer text-white'/> 
            </div>
        </div>
    </div>
  )
}

export default Nav