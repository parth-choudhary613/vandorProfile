import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Star } from 'lucide-react';

const MenuList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      name: 'Classic Flavours',
      theme: 'bg-pink-100 text-pink-900',
      accent: 'bg-pink-500',
      image: 'https://i.pinimg.com/236x/fe/6d/7c/fe6d7cbc66f2bd59494905c1498e50c0.jpg',
      relatedProducts: [
        { name: 'Green Pista', price: '$12.99', image: 'https://i.pinimg.com/236x/c6/40/3e/c6403ea12ef643654e1e9381e105a75e.jpg' },
        { name: 'Double Dekker', price: '$16.45', image: 'https://i.pinimg.com/236x/e0/f1/9c/e0f19c73be54e83b9c49ece419073807.jpg' },
        { name: 'Family Pack', price: '$22.58', image: 'https://i.pinimg.com/236x/49/38/fb/4938fb5b9ac960d76756a130c2f40c3a.jpg' },
        { name: 'Sour Strawberry', price: '$19.42', image: 'https://i.pinimg.com/236x/e3/b5/0a/e3b50a05e76ebc9d69a266fbbaed18c6.jpg' },
      ],
    },
    {
      name: 'Cup Creams',
      theme: 'bg-blue-100 text-blue-900',
      accent: 'bg-blue-500',
      image: 'https://i.pinimg.com/236x/a4/3b/d8/a43bd8140c7bda2c489a64824805ff5b.jpg',
      relatedProducts: [
        { name: 'Margarita Cup', price: '$13.99', image: 'https://i.pinimg.com/236x/ab/32/f6/ab32f6294b8f7ea141b406c3911c4897.jpg' },
        { name: 'Pepperoni Cup', price: '$14.7', image: 'https://i.pinimg.com/236x/4a/b9/50/4ab95081d15da62ae4ece56e303b4cbc.jpg' },
        { name: 'VennilaRoni Cup', price: '$16.48', image: 'https://i.pinimg.com/236x/95/68/35/9568353032fcf16a202d9256bef82f48.jpg' },
        { name: 'RusButter Cup', price: '$19.3', image: 'https://i.pinimg.com/236x/0f/cc/a2/0fcca24edd98031486a83b8a731f8d3f.jpg' },
      ],
    },
    {
      name: 'Special Cakes',
      theme: 'bg-purple-100 text-purple-900',
      accent: 'bg-purple-500',
      image: 'https://i.pinimg.com/236x/97/9d/58/979d58165bdee1f8459cb406e2274ddd.jpg',
      relatedProducts: [
        { name: 'Unicorn', price: '$45.81', image: 'https://i.pinimg.com/236x/21/c7/66/21c766bfdf29a30c1c6f0385d7f4eb60.jpg' },
        { name: 'Deliver My Cake', price: '$85.47', image: 'https://i.pinimg.com/236x/61/67/56/616756fb4ea7b6dd88d00168a196d0cb.jpg' },
        { name: 'Blue Bash', price: '$125.82', image: 'https://i.pinimg.com/236x/fe/e2/cb/fee2cb43496170f7ab971316465e3259.jpg' },
        { name: 'Rainbow Oreo', price: '$98.45', image: 'https://i.pinimg.com/236x/19/d6/be/19d6bea5d0b17e21d4e155888b920314.jpg' },
      ],
    },
    {
      name: 'Cone Fills',
      theme: 'bg-orange-100 text-orange-900',
      accent: 'bg-orange-500',
      image: 'https://i.pinimg.com/236x/ec/60/da/ec60da86d7c09f3021c681014034d202.jpg',
      relatedProducts: [
        { name: 'Rainbow Mesh', price: '$17.25', image: 'https://i.pinimg.com/236x/cb/88/18/cb88184a597cba0266cc0852163f912d.jpg' },
        { name: 'Flour Attack', price: '$20.58', image: 'https://i.pinimg.com/236x/53/d5/4e/53d54e58cc977fa8922d22a416e2eb46.jpg' },
        { name: 'Sweet Berry', price: '$08.45', image: 'https://i.pinimg.com/236x/a3/d6/bf/a3d6bfdb258a02658a4b80a50485ed80.jpg' },
        { name: 'Blue Vinella', price: '$85.00', image: 'https://i.pinimg.com/236x/1f/58/b4/1f58b4630861ad53a2e0b5cd819c87b3.jpg' },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-center mb-12 text-slate-800 drop-shadow-sm"
        >
          Sweet <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Cravings</span>
        </motion.h2>

        <div className="space-y-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              layout
              className={`rounded-3xl overflow-hidden shadow-xl border-4 border-white ${item.theme} transform transition-all duration-300`}
            >
              {/* Main Card Header */}
              <div 
                className="p-6 relative cursor-pointer group"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Image with 3D Pop effect */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10"
                  >
                    <div className="absolute inset-0 bg-white rounded-full opacity-30 blur-lg transform scale-110"></div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-[0_10px_20px_rgba(0,0,0,0.15)] border-4 border-white relative z-10"
                    />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-grow text-center md:text-left z-10">
                    <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 opacity-75">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-medium">{item.relatedProducts.length} items available</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-center gap-3 z-10 w-full md:w-auto">
                     <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-white/90 backdrop-blur text-slate-800 px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                      Browse
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Background Blob */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Dropdown Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-white/50 backdrop-blur-sm border-t border-white/20"
                  >
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.relatedProducts.map((subItem, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 group border border-slate-100"
                        >
                          <img
                            src={subItem.image}
                            alt={subItem.name}
                            className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="flex-grow">
                            <h4 className="font-bold text-slate-800">{subItem.name}</h4>
                            <p className={`font-semibold text-lg ${item.name === 'Cup Creams' ? 'text-blue-500' : 'text-pink-500'}`}>
                              {subItem.price}
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`${item.accent} text-white p-3 rounded-xl shadow-lg shadow-${item.accent}/30`}
                          >
                            <ShoppingBag size={18} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;