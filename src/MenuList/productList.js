import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaShoppingCart } from 'react-icons/fa';
import '../profileSection/profileSection.css'; // Ensure CSS is imported

const MenuList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    {
      name: 'Classic Flavours',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=150&q=80',
      relatedProducts: [
        { name: 'Green Pista', price: '$12.99', image: 'https://images.unsplash.com/photo-1629385697523-28564b19685a?auto=format&fit=crop&w=100&q=80' },
        { name: 'Double Dekker', price: '$16.45', image: 'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?auto=format&fit=crop&w=100&q=80' },
        { name: 'Family Pack', price: '$22.58', image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=100&q=80' },
        { name: 'Sour Strawberry', price: '$19.42', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=100&q=80' },
      ],
    },
    {
      name: 'Cup Creams',
      image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=150&q=80',
      relatedProducts: [
        { name: 'Margarita Cup', price: '$13.99', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=100&q=80' },
        { name: 'Pepperoni Cup', price: '$14.70', image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=100&q=80' },
      ],
    },
    {
      name: 'Signature Cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=150&q=80',
      relatedProducts: [
        { name: 'Unicorn Dream', price: '$45.81', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=100&q=80' },
        { name: 'Blue Bash', price: '$125.82', image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=100&q=80' },
      ],
    },
    {
      name: 'Cone Fills',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=150&q=80',
      relatedProducts: [
        { name: 'Rainbow Mesh', price: '$17.25', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=100&q=80' },
        { name: 'Blue Vanilla', price: '$85.00', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=100&q=80' },
      ],
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-white/60 mb-12"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-800 text-center ice-cream-font">
        <span className="text-pink-500">Delicious</span> Menu
      </h2>
      
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Main Category Header */}
            <div 
              onClick={() => toggleDropdown(index)}
              className="p-4 cursor-pointer flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative z-10"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-pink-100 object-cover shadow-sm" 
              />
              <span className="text-xl sm:text-2xl font-bold text-slate-700 flex-grow text-center sm:text-left ice-cream-font">
                {item.name}
              </span>
              
              <motion.div 
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                className="bg-pink-100 p-3 rounded-full text-pink-500"
              >
                <FaChevronDown />
              </motion.div>
            </div>

            {/* Dropdown Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.ul 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-pink-50/50 overflow-hidden"
                >
                  <div className="p-4 space-y-3">
                    {item.relatedProducts.map((relatedItem, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-3 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm"
                      >
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <img 
                            src={relatedItem.image} 
                            alt={relatedItem.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-pink-100" 
                          />
                          <span className="font-semibold text-slate-700">{relatedItem.name}</span>
                        </div>
                        
                        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                          <span className="font-bold text-pink-600 text-lg">{relatedItem.price}</span>
                          <motion.button 
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg flex items-center gap-2"
                          >
                            Add <FaShoppingCart size={12}/>
                          </motion.button>
                        </div>
                      </motion.li>
                    ))}
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuList;