import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';
import '../profileSection/profileSection.css'; // Ensure CSS is imported
import Review from '../ReviewSection/Mainreview';

// --- PLACEHOLDER IMAGES (Uncomment your imports below to use your local files) ---
// import Image1 from '../Components/lightbox.jpg';
// ... etc

const images = [
  { src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80', caption: 'Strawberry Arnaud' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80', caption: 'Platinum Cake' },
  { src: 'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?auto=format&fit=crop&w=600&q=80', caption: 'Absurdity Sundae' },
  { src: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80', caption: 'Frozen Chocolate' },
  { src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80', caption: 'Three Twin Sundae' },
  { src: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=600&q=80', caption: 'Bear Extraordinaire' },
  { src: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80', caption: 'Golden Opulence' },
  { src: 'https://images.unsplash.com/photo-1629385697523-28564b19685a?auto=format&fit=crop&w=600&q=80', caption: 'The Victoria' },
  { src: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80', caption: 'Byakuya' },
  { src: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=600&q=80', caption: 'Vinllkuya' },
  { src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80', caption: 'Kuya Delight' },
  { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80', caption: 'Vinll Special' },
];

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const goToPrevious = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking button
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto mt-12 mb-12 px-4"
      >
        {/* Main Glass Container */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 relative overflow-hidden">
            
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 drop-shadow-sm ice-cream-font">
                    <span className="text-pink-500 text-5xl md:text-7xl mr-1">O</span>ur
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ml-3">
                    Other Products
                    </span>
                </h1>
                <p className="text-slate-600 mt-2 text-lg">A gallery of sweetness</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative cursor-pointer group rounded-3xl overflow-hidden shadow-md border-2 border-white"
                        onClick={() => openLightbox(index)}
                    >
                        {/* Image */}
                        <img
                            className="object-cover w-full h-40 md:h-56 transition-transform duration-500 group-hover:scale-110"
                            src={image.src}
                            alt={image.caption}
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {image.caption}
                            </span>
                            <FaExpand className="text-white/80 mt-2" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4"
            >
                {/* Close Button */}
                <button 
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
                >
                    <FaTimes size={24} />
                </button>

                {/* Main Content Area */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()} // Click image shouldn't close modal
                    className="relative max-w-4xl w-full max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:block"
                >
                    <img
                        className="object-contain w-full h-full max-h-[75vh] bg-black"
                        src={images[currentImage].src}
                        alt={images[currentImage].caption}
                    />
                    
                    {/* Caption Bar */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                        <h3 className="text-2xl text-white font-bold ice-cream-font tracking-wide">
                            {images[currentImage].caption}
                        </h3>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all"
                    >
                        <FaChevronRight size={24} />
                    </button>

                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
      
      {/* Review Component */}
      <Review/>
    </>
  );
};

export default Lightbox;