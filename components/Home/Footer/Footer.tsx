"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Interests", href: "#interests" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/PiuminiTishani", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/piumini-tishani-209b70269/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#05050f]/98 z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8">
        
        {/* Navigation Links */}
        <div className="flex justify-center mb-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-[#80e0ff] active:text-[#80e0ff] text-sm font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#80e0ff] transition-all duration-300 group-hover:w-full group-active:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-[70%] mx-auto h-px bg-gradient-to-r from-transparent via-[#80e0ff]/70 to-transparent mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Piumini Tishani. All Rights Reserved.
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-[#13132b] flex items-center justify-center hover:bg-[#80e0ff] active:bg-[#80e0ff] text-gray-400 hover:text-[#0d0d1f] active:text-[#0d0d1f] transition-all duration-300 border border-white/5 hover:border-[#80e0ff] active:border-[#80e0ff]"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right: Made with love */}
          <div className="text-gray-400 text-sm flex items-center gap-1.5">
            <span>Crafted with</span>
            <FaHeart className="w-3.5 h-3.5 text-[#ff0000] animate-pulse" />
            <span>by Piumini</span>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0d0d1f] to-transparent opacity-50 pointer-events-none" />
    </footer>
  );
}
