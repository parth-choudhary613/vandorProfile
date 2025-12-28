import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';

const ReviewList = ({ reviews }) => {
  const [sortBy, setSortBy] = useState('date');

  const sortReviews = (a, b) => {
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'helpfulness') return b.helpfulness - a.helpfulness;
  };

  // Helper to generate a random pastel color for the user avatar
  const getAvatarColor = (name) => {
    const colors = ['bg-pink-300', 'bg-purple-300', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full">
      {/* Header & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-xl font-bold text-slate-700">
            Recent Reviews <span className="text-pink-500 text-sm font-normal">({reviews.length})</span>
        </h3>
        <div className="relative">
            <select
                className="appearance-none bg-white border border-pink-200 text-slate-600 py-2 pl-4 pr-8 rounded-full focus:outline-none focus:border-pink-500 cursor-pointer shadow-sm text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="date">Newest First</option>
                <option value="rating">Highest Rating</option>
                <option value="helpfulness">Most Helpful</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-pink-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
      </div>

      {/* Review List */}
      <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence>
            {reviews.sort(sortReviews).map((review, index) => (
            <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/80 p-6 rounded-3xl shadow-sm border border-pink-50 hover:shadow-md transition-shadow"
            >
                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getAvatarColor(review.user)} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                        {review.user.charAt(0).toUpperCase()}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">{review.user}</h4>
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} className={i < review.rating ? 'text-yellow-400' : 'text-gray-200'} />
                                    ))}
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                                <FaCalendarAlt /> {new Date(review.date).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-slate-600 mt-3 leading-relaxed">{review.comment}</p>
                    </div>
                </div>
            </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ReviewList;