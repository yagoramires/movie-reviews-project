import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';

const Home = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const { documents: movies } = useFetchData('reviews');

  return (
    <section className='max-w-[1200px] w-[90%] mx-auto sectionHeight py-4 md:p-8'>
      <div className='flex flex-col items-center justify-between gap-4 pb-4 border-b-4 border-yellow-400 md:pb-8 sm:flex-row'>
        <div className='sm:w-[50%] flex flex-col items-start justify-center'>
          <h1 className='mb-2 text-3xl font-bold sm:text-4xl xl:text-5xl'>
            <span className='text-yellow-400'>Latest </span>
            <span className='border-b-4 border-black'>movies</span>
          </h1>
          <p className='mt-4 text-xs italic text-gray-500 sm:text-base xl:text-xl'>
            Be sure not to miss these reviews today.
          </p>
        </div>
        <form
          className='relative flex sm:w-[50%]  w-full'
          onSubmit={handleSearch}
        >
          <input
            type='text'
            placeholder='Write a movie name ...'
            className='items-center justify-center w-full p-2 italic border-2 rounded-md outline-none border-slate-200-400 text-start bg-gray-50'
          />
          <input
            type='submit'
            value='Search'
            className='absolute right-0 items-center justify-center p-2 font-bold text-white transition-all duration-300 bg-yellow-400 border-2 border-yellow-400 shadow-sm cursor-pointer rounded-r-md hover:bg-yellow-300 hover:border-yellow-300 hover:tracking-wider'
          />
        </form>
      </div>

      <div className='grid items-start grid-flow-row grid-cols-1 py-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {movies?.map((movie) => (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className='max-w-[200px]'
          >
            <Card
              image={movie.image}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
