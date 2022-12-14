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

  const { documents } = useFetchData();

  return (
    <section className='max-w-[1200px] w-[90%] mx-auto sectionHeight my-8'>
      <div className='flex flex-col items-center justify-between gap-4 pb-8 mt-10 mb-8 border-b-4 border-yellow-400 md:flex-row'>
        <div>
          <h1 className='mb-2 text-5xl font-bold md:text-4xl'>
            <span className='text-yellow-400'>Latest </span>{' '}
            <span className='border-b-4 border-black'>reviews</span>
          </h1>
          <p className='mt-4 text-xl italic text-gray-500 md:text-sm'>
            Be sure not to miss these reviews today.
          </p>
        </div>
        <form
          className='relative flex max-w-[600px] w-[90%]'
          onSubmit={handleSearch}
        >
          <input
            type='text'
            placeholder='Write a movie name ...'
            className='items-center justify-center w-full p-4 italic border-2 border-yellow-400 rounded-md outline-none text-start bg-gray-50 placeholder:text-yellow-400'
          />
          <input
            type='submit'
            value='Search'
            className='absolute right-0 items-center justify-center p-4 font-bold text-white transition-all duration-300 bg-yellow-400 border-2 border-yellow-400 shadow-sm cursor-pointer rounded-r-md hover:bg-yellow-300 hover:tracking-wider'
          />
        </form>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-2'>
        {documents?.map((document) => (
          <Link to={`/details/${document.id}`}>
            <Card
              image={document.image}
              title={document.title}
              genre={document.genre}
              rating={document.rating}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
