import React, { useState } from 'react';

const ReviewList = ({ reviews }) => {
  const [sortBy, setSortBy] = useState('date');

  const sortReviews = (a, b) => {
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'helpfulness') return b.helpfulness - a.helpfulness;
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">Recent Reviews</h3>
        <select
          className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="rating">Sort by Rating</option>
          <option value="helpfulness">Sort by Helpfulness</option>
        </select>
      </div>
      <ul>
        {reviews.sort(sortReviews).map((review, index) => (
          <li key={index} className="mb-4 border-b pb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
              <span className="text-base sm:text-lg font-bold">{review.user}</span>
              <div className="flex ml-0 sm:ml-2 mt-2 sm:mt-0">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.435 8.21 1.191-5.937 5.787 1.4 8.15L12 18.897l-7.341 3.853 1.4-8.15L.121 9.213l8.21-1.191z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
