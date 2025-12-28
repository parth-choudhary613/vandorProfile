import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingDisplay = ({ rating }) => {
  // Helper to render stars based on numeric value
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-6 h-6 md:w-8 md:h-8 drop-shadow-sm" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-6 h-6 md:w-8 md:h-8 drop-shadow-sm" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 w-6 h-6 md:w-8 md:h-8" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="text-6xl font-extrabold text-pink-500 ice-cream-font mb-2">
        {rating.toFixed(1)}
      </div>
      <div className="flex space-x-1 mb-2">
        {renderStars()}
      </div>
      <span className="text-slate-500 font-medium">out of 5 stars</span>
    </div>
  );
};

export default RatingDisplay;