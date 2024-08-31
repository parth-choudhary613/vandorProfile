import React, { useState } from 'react';
import RatingDisplay from './RatingDisplay';
import ReviewList from './Reviewlist';
import ReviewForm from './Reviewform'; 
import Recommended from '../Recommendationsection/Recommend'

import MainList from '../MenuList/mainList';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { user: 'Parth Choudhary', rating: 4, comment: 'Great product!', date: '2024-08-20', helpfulness: 5 },
    { user: 'SherLock', rating: 5, comment: 'Loved it!', date: '2024-08-19', helpfulness: 8 },
    
  ]);

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 mt-8  cardscolor neuromorphism">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl textstyle fontcolor text-center mt-8">
          <span className="textstyle fontcolor text-4xl md:text-5xl lg:text-6xl">R</span>
          eview<span className="textstyle fontcolor text-4xl md:text-5xl lg:text-6xl">U</span>s
        </h1>
        <div className="max-w-4xl mx-auto my-4 p-2">
          <div className="p-4 md:p-8 lg:p-12 xl:p-16 rounded-3xl cardscolor neuromorphism">
            <RatingDisplay rating={averageRating} />
            <ReviewList reviews={reviews} />
            <ReviewForm addReview={addReview} />
          </div>
        </div>
      </div>
      <MainList />
    <Recommended/>
    

    </>
  );
};

export default ReviewSection;
