import React from 'react';
import RatingStars from './RatingStars';
import { UilHeart } from '@iconscout/react-unicons';

function Card({ name, image, price, desc, rate, category }) {
  return (
    
      <div className="w-[330px] h-[550px] bg-white rounded-lg shadow-2xl p-4 hover:scale-101 hover:shadow-md">
      <img src={image} alt="img" className="w-full h-[270px] object-cover rounded-t-lg mb-7" />
      <div className="p-2 flex justify-between items-center mb-2">
        <div>
          <span className="font-bold text-2xl mr-2">${price}</span>
          <span className="text-gray-400 line-through ml-1 text-xl">${Math.round(price * 1.1)}$</span>
          <div className="flex items-center">
            <RatingStars rating={rate} />
            <span className="ml-3 text-yellow-700 text-xl">{rate}</span>
          </div>
        </div>
        <div className='p-2  rounded-lg border'>
          <UilHeart className="text-red-500" />
        </div>
      </div>
      <p className="px-2 font-sm text-lg mb-1">{name}</p>
      <p className="px-2 text-gray-500 mb-3">Camera - Black</p>
    </div>
    
  );
}

export default Card;
