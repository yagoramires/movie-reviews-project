import React, { useEffect, useState } from 'react';

import { AiFillStar } from 'react-icons/ai';

const Card = ({ image, title, genre, rating }) => {
  const [stars, setStars] = useState([]);

  const setRatingStars = (size) => {
    const arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    setStars(setRatingStars(rating));
  }, [rating]);

  return (
    <div className='flex flex-col gap-2 relative w-[300px] sm:w-[220px] md:w-[200px] xl:w-[260px] cursor-pointer hover:scale-105 transition-all duration-200 overflow-hidden '>
      <img
        src={image}
        alt='poster'
        className=' w-full h-[480px] sm:h-[360px] md:h-[300px] xl:h-[420px] object-cover shadow-lg'
      />
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='flex '>
            {stars.map((e) => (
              <AiFillStar key={e} className='text-yellow-400' />
            ))}
          </span>
          <span className='pr-1 text-sm italic text-gray-400'>{genre}</span>
        </div>
        <h3 className='text-xl font-bold '>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
