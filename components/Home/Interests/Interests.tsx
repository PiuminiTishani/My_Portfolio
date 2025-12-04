"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// --- Types ---
interface Interest {
  id: number;
  title: string;
  country: string;
  description: string;
  image: string;
  gallery: string[];
}

// --- Data ---
const interestsData: Interest[] = [
  {
    id: 1,
    title: "DANCING",
    country: "",
    description: "The hidden language of the soul",
    image: "/dancing/2.jpg",
    gallery: [
      "/dancing/1.jpg",
      "/dancing/2.jpg",
      "/dancing/3.jpg",
      "/dancing/4.jpg",
      "/dancing/5.jpg",
      "/dancing/6.jpg",
      "/dancing/7.jpg",
      "/dancing/8.jpg",
      "/dancing/9.jpg",
      "/dancing/10.jpg",
      "/dancing/10 (2).jpg",
      "/dancing/11.jpg",
      "/dancing/12.jpg",
      "/dancing/13.jpg",
      "/dancing/14.jpg",
      "/dancing/15.jpg",
      "/dancing/16.jpg",
      "/dancing/16 (2).jpg",
      "/dancing/17.jpg",
      "/dancing/18.jpg",
      "/dancing/19.jpg",
      "/dancing/20.jpg",
      "/dancing/21.jpg",
      "/dancing/22.jpg",
      "/dancing/23.jpg",
      "/dancing/24.jpg",
      "/dancing/25.jpg",
      "/dancing/26.jpg",
      "/dancing/27.jpg",
      "/dancing/28.jpg",
      "/dancing/29.jpg",
      "/dancing/30.jpg",
      "/dancing/31.jpg",
      "/dancing/32.jpg",
      "/dancing/33.jpg",
    ]
  },
  {
    id: 2,
    title: "BADMINTON",
    country: "",
    description: "The art of agility",
    image: "/badminton/1.jpg",
    gallery: [
      "/badminton/2.jpg",
      "/badminton/3.jpg",
      "/badminton/4.jpg",
      "/badminton/5.jpg",
      "/badminton/6.jpg",
      "/badminton/7.jpg",
    ]
  },

  
];

// --- Sub-Component: Infinite Scrolling Column ---
const InfiniteColumn = ({ images, duration, className }: { images: string[], duration: number, className?: string }) => {
  const columnContent = [...images, ...images, ...images, ...images];

  const getHeightClass = (index: number) => {
    const heights = ["h-64", "h-96", "h-80", "h-72", "h-[400px]"];
    return heights[index % heights.length];
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <motion.div
        animate={{ y: "-50%" }}
        initial={{ y: "0%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-8"
      >
        {columnContent.map((img, i) => (
          <div 
            key={i} 
            className={`relative w-full ${getHeightClass(i)} rounded-lg overflow-hidden shrink-0`}
          >
            <Image 
              src={img} 
              alt="gallery" 
              fill 
              className="object-cover transition-opacity duration-500" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Sub-Component: Floating Gallery Modal ---
const FloatingGallery = ({ interest, onClose }: { interest: Interest; onClose: () => void }) => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; }
  }, []);

  const col1 = interest.gallery.filter((_, i) => i % 4 === 0);
  const col2 = interest.gallery.filter((_, i) => i % 4 === 1);
  const col3 = interest.gallery.filter((_, i) => i % 4 === 2);
  const col4 = interest.gallery.filter((_, i) => i % 4 === 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // CHANGED: Added z-[999] to ensure it sits on top of everything, including navbars
      className="fixed inset-0 z-999 bg-[#0d0d1f] flex flex-col overflow-hidden"
    >
      {/* Header */}
      {/* CHANGED: Increased top padding (pt-28 mobile, md:pt-32 desktop) to push content below navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-28 px-6 pb-8 md:pt-32 md:px-12 bg-linear-to-b from-black/90 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{interest.title}</h2>
          <p className="text-[#80e0ff] tracking-widest text-sm">{interest.country}</p>
        </div>
        <button 
          onClick={onClose} 
          className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm group"
        >
          <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Gallery Container */}
      <div className="relative w-full h-full overflow-hidden bg-[#0d0d1f]">
        
        {/* Mask */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-[#0d0d1f] via-transparent to-[#0d0d1f] h-full" />

        {/* The Grid */}
        <div className="w-full h-[120vh] -mt-[10vh] px-4 md:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transform rotate-0">
          <InfiniteColumn images={col1} duration={45} className="pt-0" />
          <InfiniteColumn images={col2} duration={35} className="pt-24" />
          <InfiniteColumn images={col3} duration={50} className="pt-12" />
          <InfiniteColumn images={col4} duration={40} className="pt-40" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function InterestsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % interestsData.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + interestsData.length) % interestsData.length);

  const getIndex = (offset: number) => (activeIndex + offset + interestsData.length) % interestsData.length;
  const activeItem = interestsData[activeIndex];

  const handleCardClick = (offset: number) => {
    if (offset === 0) setSelectedInterest(activeItem);
    else if (offset === -1) handlePrev();
    else if (offset === 1) handleNext();
  };

  return (
    <section id="interests" className="relative py-12 pt-24 bg-[#0d0d1f] text-white overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeItem.image}
              alt="Background"
              fill
              className="object-cover blur-sm opacity-100 brightness-75"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-b from-[#0d0d1f] via-transparent to-[#0d0d1f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center text-[#80e0ff] mb-8 md:mb-12 drop-shadow-lg">
          Interests
        </h2>

        {/* 3D Carousel */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-1000">
          {[-1, 0, 1].map((offset) => {
            const index = getIndex(offset);
            const item = interestsData[index];
            const isActive = offset === 0;

            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                animate={{
                  x: offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 280),
                  scale: isActive ? 1 : 0.85,
                  rotateY: offset * -25, 
                  zIndex: isActive ? 10 : 0,
                  opacity: isActive ? 1 : 0.6,
                  filter: isActive ? "brightness(1.1) contrast(1.1)" : "brightness(0.5) blur(1px)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`absolute w-[260px] md:w-[340px] h-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 ${isActive ? "cursor-pointer ring-2 ring-[#80e0ff]/50" : "cursor-pointer"}`}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => handleCardClick(offset)}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 340px" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 p-8 text-center"
                    >
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-2 drop-shadow-md">{item.title}</h3>
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-0.5 w-8 bg-[#80e0ff]" />
                        <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#80e0ff]">{item.country}</span>
                      </div>
                      <p className="text-sm text-gray-300 italic font-light tracking-wide opacity-90 mb-4">&ldquo;{item.description}&rdquo;</p>
                      <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-xs uppercase tracking-widest text-white/80 group-hover:bg-white/20 transition-colors">Open Gallery</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-20">
            <button onClick={handlePrev} className="pointer-events-auto group p-3 rounded-full bg-black/20 hover:bg-[#80e0ff]/20 border border-white/10 hover:border-[#80e0ff]/50 backdrop-blur-md transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-8 h-8 text-white group-hover:text-[#80e0ff]" />
            </button>
            <button onClick={handleNext} className="pointer-events-auto group p-3 rounded-full bg-black/20 hover:bg-[#80e0ff]/20 border border-white/10 hover:border-[#80e0ff]/50 backdrop-blur-md transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-8 h-8 text-white group-hover:text-[#80e0ff]" />
            </button>
        </div>

        <div className="flex justify-center gap-3 mt-8 relative z-20">
          {interestsData.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#80e0ff] shadow-[0_0_10px_#80e0ff]" : "w-2 bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedInterest && (
          <FloatingGallery interest={selectedInterest} onClose={() => setSelectedInterest(null)} />
        )}
      </AnimatePresence>

    </section>
  );
}