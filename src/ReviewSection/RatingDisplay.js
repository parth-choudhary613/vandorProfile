import React from 'react';

const RatingDisplay = ({ rating }) => {
  return (
    <div className="flex items-center m-4">
      <span className="text-xl md:text-2xl font-bold">{rating.toFixed(1)}</span>
      <div className="flex ml-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 md:w-6 md:h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.435 8.21 1.191-5.937 5.787 1.4 8.15L12 18.897l-7.341 3.853 1.4-8.15L.121 9.213l8.21-1.191z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-gray-600 text-sm md:text-base">out of 5</span>
    </div>
  );
};

export default RatingDisplay;
