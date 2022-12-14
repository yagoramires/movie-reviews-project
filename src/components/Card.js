import React from 'react';

import { AiFillStar } from 'react-icons/ai';

const Card = ({ image, title, genre, rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className='flex flex-col gap-2 relative w-[200px] mt-4 cursor-pointer hover:scale-105 transition-all duration-200 overflow-hidden'>
      <img
        src={image}
        alt='poster'
        className=' w-[200px] h-[300px] object-cover shadow-lg rounded-md'
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
