"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Type Definition ---
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
const InfiniteColumn = ({ images, duration, className }: { images: string[]; duration: number; className: string }) => {
  return (
    <motion.div
      className={`flex flex-col gap-3 md:gap-6 ${className}`}
      animate={{ y: ["0%", "-50%"] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...images, ...images].map((src, idx) => (
        <div key={idx} className="relative w-full aspect-[4/3]">
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded-lg object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

// --- Sub-Component: Floating Gallery Modal ---
const FloatingGallery = ({ interest, onClose }: { interest: Interest; onClose: () => void }) => {
  const [columns, setColumns] = useState(4); // Default to 4 columns

  // 1. Handle Resize to switch between 2 columns (mobile) and 4 columns (desktop)
  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth < 768 ? 2 : 4);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, []);

  // 2. Dynamically distribute images into the correct number of columns
  // If columns = 2, images go [0, 2, 4...] and [1, 3, 5...]
  // If columns = 4, images go [0, 4, 8...], [1, 5, 9...], etc.
  const distributedImages = Array.from({ length: columns }, (_: unknown, colIndex) =>
    interest.gallery.filter((_: unknown, i: number) => i % columns === colIndex)
  );

  // Helper to determine vertical offset (parallax look) for each column
  const getPaddingClass = (index: number) => {
    if (columns === 2) {
      // Mobile offsets
      return index === 0 ? "pt-0" : "pt-24";
    } else {
      // Desktop offsets
      const paddings = ["pt-0", "pt-24", "pt-12", "pt-40"];
      return paddings[index] || "pt-0";
    }
  };

  // Helper to determine speed for each column
  const getDuration = (index: number) => {
    if (columns === 2) {
      return index === 0 ? 45 : 35;
    }
    const durations = [45, 35, 50, 40];
    return durations[index] || 40;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-[#0d0d1f] flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-24 px-6 pb-8 md:pt-28 md:px-12 bg-gradient-to-b from-[#0d0d1f] to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            {interest.title}
          </h2>
          <p className="text-[#80e0ff] tracking-widest text-xs md:text-sm">
            {interest.country}
          </p>
        </div>
        <button
          onClick={onClose}
          className="pointer-events-auto p-3 md:p-4 bg-white/10 hover:bg-white/20 active:bg-white/20 rounded-full transition-colors backdrop-blur-sm group"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 group-active:scale-110 transition-transform" />
        </button>
      </div>

      {/* Gallery Container */}
      <div className="relative w-full h-full overflow-hidden bg-[#0d0d1f]">
        {/* Mask */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#0d0d1f] via-transparent to-[#0d0d1f] h-full" />

        {/* The Grid */}
        <div
          className={`w-full h-[120vh] -mt-[10vh] px-4 md:px-8 lg:px-12 grid gap-3 md:gap-6 transform rotate-0
          ${columns === 2 ? "grid-cols-2" : "grid-cols-4"}`}
        >
          {distributedImages.map((images, index) => (
            <InfiniteColumn
              key={index}
              images={images}
              duration={getDuration(index)}
              className={getPaddingClass(index)}
            />
          ))}
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
    <section id="interests" className="relative py-12 pt-24 text-white overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#08081f]/95 z-0 pointer-events-none"></div>
      
      {/* Removed background image - now using global particles */}

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
                key={`${item.id}-${offset}`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
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
            <button onClick={handlePrev} className="pointer-events-auto group p-3 rounded-full bg-black/20 hover:bg-[#80e0ff]/20 active:bg-[#80e0ff]/20 border border-white/10 hover:border-[#80e0ff]/50 active:border-[#80e0ff]/50 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-110">
              <ChevronLeft className="w-8 h-8 text-white group-hover:text-[#80e0ff] group-active:text-[#80e0ff]" />
            </button>
            <button onClick={handleNext} className="pointer-events-auto group p-3 rounded-full bg-black/20 hover:bg-[#80e0ff]/20 active:bg-[#80e0ff]/20 border border-white/10 hover:border-[#80e0ff]/50 active:border-[#80e0ff]/50 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-110">
              <ChevronRight className="w-8 h-8 text-white group-hover:text-[#80e0ff] group-active:text-[#80e0ff]" />
            </button>
        </div>

        <div className="flex justify-center gap-3 mt-8 relative z-20">
          {interestsData.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#80e0ff] shadow-[0_0_10px_#80e0ff]" : "w-2 bg-white/20 hover:bg-white/40 active:bg-white/40"}`} />
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
