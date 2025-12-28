import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ReviewForm = ({ addReview }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
        alert("Please select a star rating!");
        return;
    }
    addReview({ user, rating, comment, date: new Date().toISOString(), helpfulness: 0 });
    setUser('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h3 className="text-2xl font-bold mb-4 text-slate-800 ice-cream-font">
        Write a Review
      </h3>
      
      {/* Name Input */}
      <div className="mb-4">
        <input
            type="text"
            placeholder="Your Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full bg-white border border-pink-200 rounded-xl px-4 py-3 text-slate-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            required
        />
      </div>

      {/* Interactive Star Rating */}
      <div className="mb-4">
        <label className="block text-sm text-slate-500 mb-2 ml-1">Your Rating</label>
        <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index} className="cursor-pointer">
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            className="hidden"
                        />
                        <FaStar 
                            className="transition-colors duration-200" 
                            size={30} 
                            color={ratingValue <= (hover || rating) ? "#fbbf24" : "#e5e7eb"} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
      </div>

      {/* Comment Input */}
      <div className="mb-4">
        <textarea
            placeholder="Tell us what you liked..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-white border border-pink-200 rounded-xl px-4 py-3 text-slate-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            rows="4"
            required
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all"
      >
        Submit Review
      </motion.button>
    </form>
  );
};

export default ReviewForm;