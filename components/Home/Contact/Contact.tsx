"use client";

import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if environment variables are loaded
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS configuration is missing. Please check environment variables.", {
        autoClose: 5000,
        closeOnClick: true,
        theme: "dark"
      });
      return;
    }
    
    setIsSent(true);

    // Get form data
    const formData = new FormData(form.current!);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const mobile = formData.get('mobile') as string;
    const message = formData.get('message') as string;

    // Combine mobile number with message
    const fullMessage = mobile 
      ? `Phone: ${mobile}\n\n${message}`
      : message;

    // Send email with combined message
    emailjs.send(serviceId, templateId, {
      name: name,
      email: email,
      message: fullMessage
    }, publicKey)
      .then(() => {
          form.current?.reset();
          toast.success("Message sent successfully!", {
            autoClose: 3000,
            closeOnClick: true,
            theme: "dark"
          });
          // Reset the sent state after a delay
          setTimeout(() => setIsSent(false), 3000);
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message.", {
            autoClose: 3000,
            closeOnClick: true,
            theme: "dark"
          });
          setIsSent(false);
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#0d0d28]/40 z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#80e0ff] mb-8 md:mb-12 drop-shadow-lg">
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-2xl font-bold leading-tight mb-4">
                Get in Touch
              </h2>
              
            </div>

            <div className="space-y-6">
              {/* Phone / WhatsApp */}
              <a 
                href="https://wa.me/94717465113"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-[#80e0ff] active:text-[#80e0ff] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#80e0ff] group-active:bg-[#80e0ff] transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#80e0ff] group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-all" />
                </div>
                <span className="text-xl font-medium">+94 71 746 5113</span>
              </a>
              {/* Email */}
              <a
                href="mailto:piuminitishani@gmail.com"
                className="flex items-center space-x-4 hover:text-[#80e0ff] active:text-[#80e0ff] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#80e0ff] group-active:bg-[#80e0ff] transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#80e0ff] group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-all" />
                </div>
                <span className="text-xl font-medium">piuminitishani@gmail.com</span>
              </a>
              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Moratuwa,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-[#80e0ff] active:text-[#80e0ff] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#80e0ff] group-active:bg-[#80e0ff] transition-all duration-300">
                  <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-[#80e0ff] group-hover:text-[#0d0d1f] group-active:text-[#0d0d1f] transition-all" />
                </div>
                <span className="text-xl font-medium">Moratuwa, Sri Lanka</span>
              </a>
            </div>

            {/* Social Icons */}
            
          </div>

          {/* --- Right Column: Form --- */}
          <div className="bg-[#13132b] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/5 relative z-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-[#1e1e36] text-white placeholder-gray-400 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80e0ff]/50 border border-transparent transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-[#1e1e36] text-white placeholder-gray-400 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80e0ff]/50 border border-transparent transition-all"
                  required
                />
              </div>

              {/* Mobile Input */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  autoComplete="tel"
                  className="w-full bg-[#1e1e36] text-white placeholder-gray-400 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80e0ff]/50 border border-transparent transition-all"
                />
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-[#1e1e36] text-white placeholder-gray-400 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80e0ff]/50 border border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSent}
                className="w-full sm:w-auto bg-[#1a2342] hover:bg-[#253055] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 border border-[#80e0ff]/30 hover:border-[#80e0ff] hover:shadow-[0_0_15px_rgba(128,224,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}