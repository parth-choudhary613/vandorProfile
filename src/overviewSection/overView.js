import React, { useState, useEffect, useMemo } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaClock, FaPhoneAlt, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion"; 

import Map from './map';
import './overview.css'; 

// --- PLACEHOLDER IMAGES ---
const Images = "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80";
const Images2 = "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80";
const Images3 = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80";
const Images4 = "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80";
const Offer1 = "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=400&q=80";
const Offer2 = "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=400&q=80";
const Offer3 = "https://images.unsplash.com/photo-1626233771887-d38316895491?auto=format&fit=crop&w=400&q=80";
const Offer4 = "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80";

// --- COUNTDOWN COMPONENT ---
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31") - +new Date(); 
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-2 md:gap-4 my-6">
        {Object.keys(timeLeft).length ? (
            Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="flex flex-col items-center bg-white/80 p-2 md:p-3 rounded-xl shadow-sm w-16 md:w-24 border border-pink-200">
                    <span className="text-xl md:text-3xl font-bold text-pink-600 ice-cream-font">
                        {timeLeft[interval]}
                    </span>
                    <span className="text-[10px] md:text-xs uppercase text-gray-500 font-semibold tracking-wider">
                        {interval}
                    </span>
                </div>
            ))
        ) : (
            <span className="text-2xl font-bold text-red-500">Offer Ended!</span>
        )}
    </div>
  );
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// --- MAIN COMPONENT ---
const Dashboard = () => {

  // Generate random data for sprinkles once on mount
  const sprinklesData = useMemo(() => {
    const sprinkleColors = ['bg-pink-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-300', 'bg-purple-300'];
    return [...Array(25)].map((_, i) => ({
      id: i,
      color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
      left: `${Math.random() * 100}%`, // Random horizontal position
      delay: Math.random() * 5,       // Random start delay
      duration: 15 + Math.random() * 10 // Random falling speed (15s to 25s)
    }));
  }, []);

  return (
    // Added relative and overflow-hidden to contain the background elements
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 p-4 pb-20 font-sans">
      
      {/* --- NEW: ANIMATED BACKGROUND LAYER --- */}
      {/* pointer-events-none ensures you can still click things underneath */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {/* 1. Melting Blobs (CSS Animation) */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
          <div className="absolute top-[40%] right-[-20%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>

          {/* 2. Falling Sprinkles (Framer Motion) */}
          {sprinklesData.map(sprinkle => (
              <FloatingSprinkle key={sprinkle.id} {...sprinkle} />
          ))}
      </div>


      {/* --- MAIN CONTENT (Wrapped in relative z-10 to sit ON TOP of background) --- */}
      <div className="relative z-10">
        
        {/* 1. INFO CARDS SECTION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 mb-16"
        >
          <InfoCard 
              title="Business Hours" 
              icon={<FaClock className="text-green-500" />} 
              content="Mon - Sat (24/7)"
              subContent="Sunday: Closed"
          />
          <InfoCard 
              title="Call Us" 
              icon={<FaPhoneAlt className="text-pink-500" />} 
              content="+91 789 654 123"
              subContent="flavourfusion@gmail.com"
          />
          <motion.div variants={itemVariants} className="bg-white/60 -md p-6 rounded-[2rem] shadow-lg border border-white hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-700">Follow Us</h3>
              <span className="text-2xl text-blue-400">✨</span>
            </div>
            <div className="flex justify-around items-center mt-2">
              <SocialIcon icon={<TiSocialInstagram />} color="text-pink-600" />
              <SocialIcon icon={<FaFacebook />} color="text-blue-600" />
              <SocialIcon icon={<FaTwitter />} color="text-sky-500" />
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">@FlavourFusionOfficial</p>
          </motion.div>
        </motion.div>


        {/* 2. BEST SELLERS SECTION */}
        <div className="max-w-7xl mx-auto mb-20">
          <TitleHeader main="Bestsellers" highlight="Top" />

          <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            {[Images, Images2, Images3, Images4].map((image, index) => (
              <ProductCard key={index} image={image} title={`Delight ${index + 1}`} price="$5.99" />
            ))}
          </motion.div>
        </div>


        {/* 3. OFFERS SECTION */}
        <div className="max-w-7xl mx-auto mb-20 bg-white/40 -md rounded-[3rem] p-6 md:p-12 border border-white/50 shadow-xl relative overflow-hidden">
          <TitleHeader main="Limited Offer" highlight="Mega" />
          
          <CountdownTimer />

          <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            {[Offer1, Offer2, Offer3, Offer4].map((offer, index) => (
              <OfferCard key={index} image={offer} title={`Combo ${index + 1}`} oldPrice="$19.99" newPrice="$15.00" />
            ))}
          </motion.div>
        </div>

        {/* 4. MAP & GALLERY SECTION */}
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-white/60 p-4 rounded-3xl shadow-lg border border-white overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-700 mb-4 ml-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500"/> Find Us Here
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-inner h-80 w-full relative">
                  <Map /> 
              </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

// --- NEW: Floating Sprinkle Sub-component ---
const FloatingSprinkle = ({ color, left, delay, duration }) => (
    <motion.div
      initial={{ y: -100, rotate: 0, opacity: 0 }}
      animate={{
        y: ['0vh', '110vh'], // Fall from top to slightly below bottom
        rotate: [0, 360],    // Spin while falling
        opacity: [0, 0.8, 0.8, 0] // Fade in, stay visible, fade out at end
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      // Tailwind classes for sprinkle shape (small rounded rectangle)
      className={`absolute top-0 w-2 h-5 rounded-full ${color} shadow-sm z-0 opacity-70`}
      style={{ left: left }}
    />
);

// --- EXISTING REUSABLE SUB-COMPONENTS ---

const InfoCard = ({ title, icon, content, subContent }) => (
    <motion.div 
        variants={itemVariants} 
        whileHover={{ y: -5 }}
        className="bg-white/60 -md p-6 rounded-[2rem] shadow-lg border border-white hover:shadow-xl transition-all duration-300"
    >
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-700">{title}</h3>
            <div className="text-2xl">{icon}</div>
        </div>
        <p className="text-xl md:text-3xl font-bold text-slate-800 mt-2 ice-cream-font">{content}</p>
        <p className="text-gray-500 font-medium mt-1">{subContent}</p>
    </motion.div>
);

const SocialIcon = ({ icon, color }) => (
    <motion.a 
        href="#" 
        whileHover={{ scale: 1.2, rotate: 10 }} 
        className={`text-3xl ${color} bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all`}
    >
        {icon}
    </motion.a>
);

const TitleHeader = ({ main, highlight }) => (
    <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-6xl font-extrabold text-slate-800 drop-shadow-sm ice-cream-font"
    >
        <span className="text-pink-500 text-5xl md:text-7xl mr-2">{highlight[0]}</span>{highlight.slice(1)}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ml-4">
            {main}
        </span>
    </motion.h1>
);

const ProductCard = ({ image, title, price }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ y: -10 }}
        className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-pink-200 transition-all duration-300 group"
    >
        <div className="overflow-hidden h-56 relative">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt={title} />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Add <FaShoppingCart/>
                </button>
            </div>
        </div>
        <div className="p-5 text-center">
            <h3 className="font-bold text-xl text-slate-800 mb-1">{title}</h3>
            <p className="text-pink-500 font-bold text-lg">{price}</p>
        </div>
    </motion.div>
);

const OfferCard = ({ image, title, oldPrice, newPrice }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-pink-100"
    >
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
            SALE
        </div>
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-5">
            <h3 className="font-bold text-xl text-slate-800 text-center mb-2">{title}</h3>
            <div className="flex justify-center items-center gap-3">
                <span className="text-gray-400 line-through text-sm">{oldPrice}</span>
                <span className="text-pink-600 font-bold text-2xl">{newPrice}</span>
            </div>
            <button className="w-full mt-4 bg-pink-100 text-pink-600 font-bold py-2 rounded-xl hover:bg-pink-500 hover:text-white transition-colors">
                Claim Offer
            </button>
        </div>
    </motion.div>
);

export default Dashboard;