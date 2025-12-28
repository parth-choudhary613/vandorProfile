import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaIceCream, FaShoppingCart } from 'react-icons/fa';
import './profileSection/profileSection.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
  ];

  // Mobile Menu Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-6xl rounded-2xl bg-white/80  shadow-xl border border-white/50 py-3'
            : 'top-0 left-0 w-full bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer z-50"
          >
            <div className="bg-gradient-to-tr from-pink-500 to-rose-400 text-white p-2.5 rounded-xl shadow-lg rotate-3">
              <FaIceCream size={22} />
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              Flavour<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Fusion</span>
            </h1>
          </motion.div>

          {/* --- DESKTOP LINKS (Animated) --- */}
          <div className="hidden md:flex items-center gap-2 bg-white/50 px-2 py-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveHover(link.name)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative px-5 py-2 text-sm font-bold text-slate-600 transition-colors"
              >
                {/* Sliding Background Effect */}
                {activeHover === link.name && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 bg-pink-100 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={activeHover === link.name ? "text-pink-600" : ""}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* --- CTA BUTTON --- */}
          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(236, 72, 153, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md flex items-center gap-2 text-sm"
            >
              Order Now <FaShoppingCart className="text-xs" />
            </motion.button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-slate-800 bg-white/80 p-2 rounded-full shadow-sm" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} className="text-pink-500" /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pt-20"
          >
            {/* Decorative background blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <ul className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-3xl font-black text-slate-800 hover:text-pink-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              
              <motion.li variants={itemVariants} className="w-full mt-8">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-xl shadow-xl flex justify-center items-center gap-3">
                  Start Order <FaShoppingCart />
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;