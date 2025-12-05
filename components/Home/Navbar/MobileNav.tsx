import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type Props = {
  showNav: boolean;
  closeNav: ()=>void;
};

const MobileNav = ({closeNav,showNav}:Props) => {

  const navOpen = showNav ? "translate-x-0":"translate-x-[100%]";

  return (
    <div>
      {/* overlay */}
      <div 
        onClick={closeNav}
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-100002 bg-black/80 backdrop-blur-sm w-full h-screen`}
      ></div>
      
      {/* navlinks - Modern Glassy Design */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 delay-100 z-100050 right-0 top-0 h-full w-[85%] sm:w-[400px] lg:hidden`}>
        <div className="relative h-full bg-black/20 backdrop-blur-2xl border-l border-[#80e0ff]/30 shadow-[-10px_0_50px_rgba(128,224,255,0.2)]">
          
          {/* Close Button */}
          <button
            onClick={closeNav}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-[#80e0ff]/20 active:bg-[#80e0ff]/30 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 group hover:rotate-90 active:rotate-90"
          >
            <CgClose className="w-6 h-6 text-white group-hover:text-[#80e0ff] group-active:text-[#80e0ff]" />
          </button>

          {/* Header */}
          <div className="pt-8 px-8 pb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#80e0ff] to-purple-600 rounded-full"></div>
          </div>

          {/* Navigation Links */}
          <nav className="px-8 space-y-4 mt-6">
            {NavLinks.map((link, index) => (
              <Link key={link.id} href={link.url}>
                <div 
                  onClick={closeNav}
                  className="group relative py-4 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-2xl font-bold text-white/80 group-hover:text-[#80e0ff] group-active:text-[#80e0ff] transition-colors">
                    {link.Label}
                  </span>
                  {/* Underline effect */}
                  <div className="h-[2px] bg-gradient-to-r from-[#80e0ff] to-purple-600 scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
            <p className="text-sm text-gray-400 mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/PiuminiTishani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#80e0ff] active:bg-[#80e0ff] backdrop-blur-sm border border-white/10 hover:border-[#80e0ff] active:border-[#80e0ff] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-110 group"
              >
                <FaGithub className="w-5 h-5 text-white group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f]" />
              </a>
              <a
                href="https://www.linkedin.com/in/piumini-tishani-3a1405287/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#80e0ff] active:bg-[#80e0ff] backdrop-blur-sm border border-white/10 hover:border-[#80e0ff] active:border-[#80e0ff] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-110 group"
              >
                <FaLinkedin className="w-5 h-5 text-white group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MobileNav