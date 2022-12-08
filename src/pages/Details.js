import React from 'react';

// Icons
import { AiFillStar } from 'react-icons/ai';

// Components
import Comments from '../components/Comments';

const Details = () => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <section className='flex items-center justify-center sectionHeight'>
      <div className='m-auto max-w-[1200px] w-[90%] mt-20'>
        <div className='flex gap-10'>
          <img
            src={
              'https://i0.wp.com/www.popsfera.com.br/wp-content/uploads/2021/11/BB266E4D-ECD6-474B-98A0-9E40077732B7.jpeg?resize=800%2C1000&ssl=1'
            }
            alt='poster'
            className='min-w-[500px] h-[700px] object-cover'
          />

          <div className='flex flex-col gap-10'>
            <h1 className='w-full text-6xl font-bold mt-[-10px]'>
              Spider-man no way home
            </h1>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                {stars.map((e) => (
                  <AiFillStar key={e} size={30} className='text-yellow-400' />
                ))}
              </div>
              <div className='flex items-center gap-4'>
                {/* <AddToFavorits data={movieData} movieId={id} /> */}
                <span className='text-2xl italic text-gray-500'>Action</span>
              </div>
            </div>
            <p className='text-xl text-justify '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              aliquam nulla eos! Quam odit a fugit nemo corrupti tenetur
              veritatis perspiciatis unde, rem eveniet, laboriosam modi
              similique at autem? Quo.
            </p>
          </div>
        </div>

        {/* Comments section */}
        <Comments />
      </div>
    </section>
  );
};

export default Details;
