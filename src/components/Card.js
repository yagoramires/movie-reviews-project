import React from 'react';

import { AiFillStar } from 'react-icons/ai';

const Card = ({ props }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className='flex flex-col gap-2 relative w-[200px] mt-4 cursor-pointer hover:scale-105 transition-all duration-200 overflow-hidden'>
      <img
        src={
          'https://i0.wp.com/www.popsfera.com.br/wp-content/uploads/2021/11/BB266E4D-ECD6-474B-98A0-9E40077732B7.jpeg?resize=800%2C1000&ssl=1'
        }
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
          <span className='text-sm italic text-gray-400'>{'Action'}</span>
        </div>
        <h3 className='text-xl font-bold '>{'Spider-Man no way home'}</h3>
      </div>
    </div>
  );
};

export default Card;
