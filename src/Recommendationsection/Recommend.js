import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import '../profileSection/profileSection.css';

// --- DATA ---
const vendors = [
  {
    id: 1,
    name: 'Tasty Bites',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80',
    rating: 4.2,
    cuisines: 'Dry Fruits, Cones',
    location: 'Sector 17, Chandigarh',
  },
  {
    id: 2,
    name: 'Carvel Sweets',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    cuisines: 'Cream Buns, Vegan',
    location: 'Sector 35, Chandigarh',
  },
  {
    id: 3,
    name: 'Bob Rocks',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    cuisines: 'Bakery, Ice Cream',
    location: 'Sector 22, Chandigarh',
  },
  {
    id: 4,
    name: 'Frosty Point',
    image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=500&q=80',
    rating: 4.3,
    cuisines: 'Gelato, Shakes',
    location: 'Sector 35, Chandigarh',
  },
];

// --- SUB COMPONENTS ---
const VendorCard = ({ vendor }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-pink-100 group flex flex-col h-full"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
        <span className="font-bold text-slate-800">{vendor.rating}</span>
        <FaStar className="text-yellow-400" size={14} />
      </div>
    </div>

    <div className="p-5 flex-grow flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-800 ice-cream-font mb-1">
          {vendor.name}
        </h2>
        <p className="text-sm text-pink-500 font-medium flex items-center gap-2 mb-3">
          <FaUtensils size={12} /> {vendor.cuisines}
        </p>
      </div>

      <div className="border-t border-gray-100 pt-3 mt-2 flex items-center text-gray-500 text-sm">
        <FaMapMarkerAlt className="mr-1" />
        <span className="truncate">{vendor.location}</span>
      </div>
    </div>
  </motion.div>
);

const SectionHeader = ({ title, highlight }) => (
  <div className="text-center mb-10 mt-12">
    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 ice-cream-font">
      <span className="text-pink-500 text-4xl md:text-6xl mr-1">
        {highlight[0]}
      </span>
      {highlight.slice(1)}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ml-3">
        {title}
      </span>
    </h1>
  </div>
);

// --- MAIN COMPONENT ---
const Recommend = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <SectionHeader highlight="Top" title="Vendors" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {vendors.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
};

export default Recommend;
