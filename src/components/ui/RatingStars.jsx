import React from 'react';

function RatingStars({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.trunc(rating)) {
      stars.push(<span className='text-yellow-400 text-2xl'  key={i}>&#9733;</span>);
    } else {
      
      stars.push(<span className='text-2xl' key={i}>&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
}
export default RatingStars