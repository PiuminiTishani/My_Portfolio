"use client";

import React, { useRef, useState } from "react";
import { FaWhatsapp, FaTelegram, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

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
    <section id="contact" className="relative py-20 bg-[#0d0d1f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Schedule a call with <br /> me to see if I can help
              </h2>
              <p className="text-gray-400 text-lg">
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-[#80e0ff]" />
                <span className="text-xl font-medium">+893473289</span>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-[#80e0ff]" />
                <span className="text-xl font-medium">hello@example.com</span>
              </div>
              {/* Location */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-[#80e0ff]" />
                <span className="text-xl font-medium">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[faFacebook, faYoutube, faTwitter, faInstagram].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#16162c] flex items-center justify-center hover:bg-[#80e0ff] hover:text-[#0d0d1f] transition-all duration-300 group border border-white/5"
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5 text-white group-hover:text-[#0d0d1f]" />
                </a>
              ))}
            </div>
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