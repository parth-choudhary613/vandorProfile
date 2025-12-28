import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import '../profileSection/profileSection.css'; 

const Map = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-6xl mx-auto mt-12 mb-12 px-4"
    >
      {/* Glassmorphism Container */}
      <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 relative overflow-hidden">
        
        {/* Decorative Background Blob inside the card */}
        <div className="absolute top-[-50%] left-[-20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Title Section */}
        <div className="text-center mb-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 drop-shadow-sm ice-cream-font">
            <span className="text-pink-500 text-4xl md:text-6xl mr-1">O</span>ur
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ml-3">
              Location
            </span>
          </h1>
        </div>

        {/* Map Wrapper */}
        {/* We use a specific height (h-96 or h-[500px]) relative positioning */}
        <div className="relative w-full h-96 md:h-[500px] rounded-[1.5rem] overflow-hidden border-4 border-white shadow-lg bg-gray-100">
          
          {/* Animated Pin Overlay (Optional - Remove if it blocks the view) */}
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             >
                <FaMapMarkerAlt className="text-6xl text-pink-600 drop-shadow-xl" />
             </motion.div>
             <div className="w-4 h-2 bg-black/20 rounded-full blur-sm mx-auto mt-2 animate-pulse"></div>
          </div>

          {/* Actual Google Map Iframe */}
          <iframe
            title="Our Work Location"
            className="absolute inset-0 w-full h-full"
            /* IMPORTANT: Use a valid Embed URL. 
               This is a generic placeholder. See instructions below to get yours.
            */
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.688248388832!2d77.3888!3d28.5085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzMwLjYiTiA3N8KwMjMnMTkuNyJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </motion.div>
  );
}

export default Map;