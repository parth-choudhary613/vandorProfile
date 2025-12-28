import React from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaMusic, FaChair } from 'react-icons/fa';

const SpecialFeatures = () => {
  const features = [
    { title: 'Free Wi-Fi', description: 'Snap & share your scoops instantly with our high-speed internet.', icon: <FaWifi /> },
    { title: 'Live Music', description: 'Vibe with us! Live acoustic performances every Friday night.', icon: <FaMusic /> },
    { title: 'Garden Seating', description: 'Enjoy the breeze in our cozy, pet-friendly outdoor area.', icon: <FaChair /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='rounded-[2.5rem] mt-12 mb-12 glassmorphism'
    >
      <div className="p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-slate-800 ice-cream-font">
            Special <span className="text-pink-500">Treats</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/70 p-6 rounded-3xl shadow-lg border border-white flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-4xl text-pink-500 bg-pink-100 p-4 rounded-full mb-4 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialFeatures;