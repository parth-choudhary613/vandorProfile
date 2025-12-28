import React, { useState } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaCamera, FaPhoneAlt, FaIceCream } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Overview from '../overviewSection/overView';
import './profileSection.css'; 


const FlavourFusion = () => {
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  
  // Default image: A cheerful ice cream vendor or a logo
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2024/01/26/23/39/ice-cream-8534875_1280.jpg" 
  );

  const handleCameraClick = () => setShowImageOptions(!showImageOptions);
  
  const handleSeeImageClick = () => {
    setIsImageEnlarged(true);
    setShowImageOptions(false);
  };

  const handleChangeImageClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        setIsImageEnlarged(false);
        setShowImageOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-300 via-purple-200 to-blue-200 p-4 font-sans">
        
        {/* --- 3D Floating Background Elements (Toppings) --- */}
        <FloatingElement emoji="🍦" top="10%" left="5%" delay={0} />
        <FloatingElement emoji="🍓" top="20%" right="10%" delay={2} />
        <FloatingElement emoji="🍩" bottom="15%" left="15%" delay={1} />
        <FloatingElement emoji="🍫" bottom="20%" right="20%" delay={3} />
        
        {/* Animated Background Blob (Melting Effect) */}
        <div className="absolute top-0 left-0 w-full h-48 bg-white/30 rounded-b-[50%] blur-3xl"></div>

        {/* Main Glassmorphism Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-lg border-2 border-white/60 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(255,105,180,0.3)] overflow-visible flex flex-col md:flex-row p-8 md:p-12 items-center gap-10"
        >
          
          {/* --- Left Side: Profile Image (Cookie/Waffle Style) --- */}
          <div className="relative group perspective-1000">
            <motion.div 
              animate={{ rotate: isImageEnlarged ? 0 : [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className={`relative transition-all duration-500 ${isImageEnlarged ? "w-80 h-80" : "w-48 h-48 md:w-64 md:h-64"}`}
            >
              {/* Waffle/Gold Border Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full animate-spin-slow opacity-80 shadow-lg"></div>
              
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl z-10"
              />

              {/* Camera Icon Button */}
              <motion.button
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute bottom-2 right-4 z-20 bg-pink-500 text-white p-3 rounded-full shadow-lg border-2 border-white hover:bg-pink-600 transition"
                onClick={handleCameraClick}
              >
                <FaCamera />
              </motion.button>
            </motion.div>

            {/* Image Options Popover */}
            <AnimatePresence>
              {showImageOptions && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-2xl shadow-xl flex flex-col w-48 z-50 border border-pink-100"
                >
                  <button onClick={handleSeeImageClick} className="text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition font-medium">
                    🔍 View Photo
                  </button>
                  <label className="text-left px-4 py-2 text-pink-500 hover:bg-pink-50 rounded-lg transition cursor-pointer font-bold">
                    📂 Change Photo
                    <input type="file" accept="image/*" onChange={handleChangeImageClick} className="hidden" />
                  </label>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- Right Side: Content --- */}
          <div className="flex-1 text-center md:text-left space-y-4">
            {/* 3D Badge */}
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="inline-block bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-sm transform rotate-[-2deg]"
            >
              ✨ Best Scoops in Town
            </motion.div>

            <h1 className="ice-cream-font text-5xl md:text-7xl text-pink-600 drop-shadow-sm leading-tight">
              Flavour
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Fusion
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 font-medium">
              "Melting hearts with <span className="bg-pink-200 px-2 py-1 rounded-md text-pink-800 rotate-1 inline-block mx-1">Global Flavors</span> right here locally."
            </p>

            <div className="pt-6 relative flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(236, 72, 153, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 justify-center"
              >
                <FaPhoneAlt /> Contact Vendor
              </motion.button>
              
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 className="bg-white text-pink-500 border-2 border-pink-200 text-lg font-bold py-3 px-8 rounded-full shadow-sm hover:bg-pink-50 transition"
              >
                 View Menu 🍦
              </motion.button>
            </div>

            {/* Contact Dropdown */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-pink-100 p-5 shadow-xl w-full md:w-80"
                >
                  <p className="text-gray-500 text-sm mb-3">Connect with us for catering & orders:</p>
                  <div className="flex gap-4 justify-center md:justify-start mb-4">
                    <SocialBtn icon={<TiSocialInstagram />} color="text-pink-600" />
                    <SocialBtn icon={<FaFacebook />} color="text-blue-600" />
                    <SocialBtn icon={<FaTwitter />} color="text-sky-500" />
                  </div>
                  <div className="bg-pink-50 p-3 rounded-lg text-center md:text-left">
                    <p className="text-pink-800 font-bold text-lg">+91 789 654 123</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <Overview />
    </>
  );
};

// Sub-component for Floating Background Emojis
const FloatingElement = ({ emoji, top, left, right, bottom, delay }) => (
  <motion.div
    animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    className="absolute text-6xl opacity-40 filter blur-[1px] select-none pointer-events-none z-0"
    style={{ top, left, right, bottom }}
  >
    {emoji}
  </motion.div>
);

// Sub-component for Social Buttons
const SocialBtn = ({ icon, color }) => (
  <motion.a 
    href="#" 
    whileHover={{ scale: 1.2, rotate: 10 }}
    className={`text-3xl ${color} bg-white p-2 rounded-full shadow-sm hover:shadow-md transition`}
  >
    {icon}
  </motion.a>
);

export default FlavourFusion;