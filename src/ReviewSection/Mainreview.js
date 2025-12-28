import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RatingDisplay from './RatingDisplay';
import ReviewList from './Reviewlist';
import ReviewForm from './Reviewform'; 
// import Recommended from '../Recommendationsection/Recommend'; 
// import MainList from '../MenuList/mainList';
import '../profileSection/profileSection.css'; // Ensure styling is imported

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { user: 'Parth Choudhary', rating: 4, comment: 'Great product! The texture was amazing.', date: '2024-08-20', helpfulness: 5 },
    { user: 'SherLock', rating: 5, comment: 'Loved it! Best flavor I have tasted in years.', date: '2024-08-19', helpfulness: 8 },
  ]);

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto mt-16 mb-16 px-4">
        
        {/* Section Header */}
        <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 drop-shadow-sm ice-cream-font">
                <span className="text-pink-500 text-5xl md:text-7xl mr-1">R</span>eview
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ml-3">
                Us
                </span>
            </h1>
            <p className="text-slate-500 text-lg mt-2">See what our customers are scooping about!</p>
        </div>

        {/* Main Glass Card */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-6 md:p-12 shadow-xl border border-white/60 overflow-hidden"
        >
          {/* Decorative Blob */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Stats & Form */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white/60 p-6 rounded-3xl shadow-sm border border-pink-100">
                    <h3 className="text-xl font-bold text-slate-700 mb-2 ice-cream-font">Overall Rating</h3>
                    <RatingDisplay rating={averageRating} />
                </div>
                
                <div className="bg-white/60 p-6 rounded-3xl shadow-sm border border-pink-100">
                    <ReviewForm addReview={addReview} />
                </div>
            </div>

            {/* Right Column: Review List */}
            <div className="lg:col-span-2">
                <ReviewList reviews={reviews} />
            </div>

          </div>
        </motion.div>
      </div>

      {/* <MainList />
      <Recommended/> */}
    </>
  );
};

export default ReviewSection;