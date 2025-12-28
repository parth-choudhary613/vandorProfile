import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, Fabullseye, FaLightbulb, FaRocket } from 'react-icons/fa';
import '../profileSection/profileSection.css'; // Ensure CSS is imported

const AboutSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-16 mb-20">
      
      {/* Glass Container */}
      <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-6 md:p-12 shadow-xl border border-white/60 relative overflow-hidden">
        
        {/* Decorative Background Blob */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 drop-shadow-sm ice-cream-font">
            Flavour Fusion 
            <span className="block text-pink-500 text-2xl md:text-4xl mt-2 font-normal font-sans">
              Serving Happiness Since 2020
            </span>
          </h1>
        </motion.div>

        {/* --- MISSION / VISION / HISTORY GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* History Card */}
          <InfoCard 
            icon={<FaHistory />}
            title="Our History" 
            text="Started in a small garage with just 3 flavors, we've grown into a local favorite. Our journey is paved with sprinkles, hard work, and a love for sweet treats."
            color="bg-blue-100 text-blue-500"
          />

          {/* Vision Card */}
          <InfoCard 
            icon={<FaLightbulb />}
            title="Our Vision" 
            text="To become the happiest place on earth, one scoop at a time. We envision a world where every dessert brings a genuine smile to your face."
            color="bg-yellow-100 text-yellow-600"
          />

          {/* Mission Card */}
          <InfoCard 
            icon={<FaRocket />}
            title="Our Mission" 
            text="To source the freshest local ingredients and craft innovative flavors that challenge the norm, while maintaining the nostalgia of classic ice cream."
            color="bg-pink-100 text-pink-500"
          />
        </motion.div>

        {/* --- TEAM SECTION --- */}
        <div className="text-center mb-10">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-800 ice-cream-font">
             Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Scoop Squad</span>
           </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <TeamMember 
            name="Sarah Jenkins"
            role="Founder & Flavor Expert"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
            desc="The mastermind behind our 'Spicy Mango' sensation. Sarah loves experimenting with exotic spices."
          />
          <TeamMember 
            name="David Ross"
            role="Head Pastry Chef"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
            desc="Master of the perfect waffle cone. David ensures every crunch is as satisfying as the cream."
          />
          <TeamMember 
            name="Emily Chen"
            role="Customer Experience"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
            desc="If you leave with a smile, it's probably because of Emily. She leads our service team with joy."
          />
        </motion.div>

      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const InfoCard = ({ icon, title, text, color }) => (
  <motion.div 
    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
    whileHover={{ y: -10 }}
    className="bg-white/60 p-8 rounded-3xl shadow-sm border border-white hover:shadow-lg transition-all duration-300"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${color}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-3 ice-cream-font">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
      {text}
    </p>
  </motion.div>
);

const TeamMember = ({ name, role, image, desc }) => (
  <motion.div 
    variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
    whileHover={{ scale: 1.02 }}
    className="bg-white/70 p-6 rounded-3xl shadow-md border border-pink-100 flex flex-col items-center text-center group"
  >
    <div className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-purple-400 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
      <img 
        src={image} 
        alt={name} 
        className="relative w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg" 
      />
    </div>
    <h3 className="text-2xl font-bold text-slate-800 ice-cream-font">{name}</h3>
    <p className="text-pink-500 font-bold text-sm uppercase tracking-wide mb-3">{role}</p>
    <p className="text-slate-600 text-sm">
      "{desc}"
    </p>
  </motion.div>
);

export default AboutSection;