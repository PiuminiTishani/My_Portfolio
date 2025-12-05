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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const targetId = url.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = window.innerHeight * 0.12; // 12vh navbar height
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-[100] fixed w-full`}
    >
        <div className='flex items-center h-full w-90% mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-1.5 md:space-x-2 pl-3 md:pl-6 lg:pl-20'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-4 h-4 md:w-5 md:h-5 text-black' />
                </div>
                <h1 className='text-lg md:text-xl lg:text-2xl text-white font-bold'>Piumini</h1>
            </div>
            {/* Nav Links */}
            <div className='hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-10 flex-1 justify-center'>
              {NavLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  onClick={(e) => handleSmoothScroll(e, link.url)}
                  className='text-xs md:text-sm lg:text-base hover:text-cyan-300 text-white font-medium transition-all duration-200 whitespace-nowrap'
                >
                  <p>{link.Label}</p>
                </a>
              ))}
            </div>
            {/* Social Icons - Visible on md and above */}
            <div className='hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-4 pr-3 md:pr-6 lg:pr-20'>
              <a 
                href="https://github.com/PiuminiTishani" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white/10 hover:bg-[#80e0ff] active:bg-[#80e0ff] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-110 group'
              >
                <FaGithub className='w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-colors' />
              </a>
              <a 
                href="https://www.linkedin.com/in/piumini-tishani-209b70269/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white/10 hover:bg-[#80e0ff] active:bg-[#80e0ff] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-110 group'
              >
                <FaLinkedin className='w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-colors' />
              </a>
            </div>
            {/* Burger Menu - Mobile Only */}
            <div className='flex md:hidden items-center justify-end flex-1 pr-4'>
              <HiBars3BottomRight 
                onClick={openNav} 
                className='w-8 h-8 cursor-pointer text-white'/> 
            </div>
        </div>
    </div>
  )
}

export default Nav