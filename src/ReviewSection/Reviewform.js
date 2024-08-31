import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ user, rating, comment, date: new Date(), helpfulness: 0 });
    setUser('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 max-w-lg mx-auto">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        Write a Review
      </h3>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border rounded px-3 py-2 mb-4 w-full text-sm md:text-base"
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border rounded px-3 py-2 mb-4 w-full text-sm md:text-base"
        required
      >
        <option value={0}>Select Rating</option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star{star > 1 && 's'}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border rounded px-3 py-2 mb-4 w-full text-sm md:text-base"
        rows="4"
        required
      />
      <button
        type="submit"
        className="neuromorphism rounded-xl cardscolor text-black px-4 py-2 m-4 text-sm md:text-base w-full sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
